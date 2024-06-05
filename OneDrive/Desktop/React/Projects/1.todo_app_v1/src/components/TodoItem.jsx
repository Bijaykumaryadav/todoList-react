import { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext);
  const handleDeleteClick = () => {
    console.log(todoName);
    deleteItem(todoName);
  };

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={handleDeleteClick}
          >
            <FaDeleteLeft />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
