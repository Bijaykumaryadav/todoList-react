import { useContext, useRef } from "react";
import { BiSolidMessageRoundedAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement = useRef(0);
  const dueDateElement = useRef(0);

  // const handleNameChange = (event) => {
  //   console.log(event.target.value);
  //   setTodoName(event.target.value);
  //   // noOfUpdates.current += 1;
  // };

  // const handleDateChange = (event) => {
  //   console.log(event.target.value);
  //   setDueDate(event.target.value);
  //   // console.log(`noOfUpdates are : ${noOfUpdates.current}`);
  // };

  const handleAddButtonClicked = (event) => {
    // console.log(event);
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    console.log(`${todoName} due on : ${dueDate}`);
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
    // setTodoName("");
    // setDueDate("");
  };

  return (
    <form onSubmit={handleAddButtonClicked} className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            ref={todoNameElement}
            type="text"
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4 ">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success kg-button">
            <BiSolidMessageRoundedAdd />
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddTodo;
