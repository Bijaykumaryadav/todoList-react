import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type == "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type == "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (todoItem) => todoItem.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};


const TodoItemsContextProvider = ({ children }) => {
  // const [todoItems, setTodoItems] = useState([]);

  // const [state,dispatch] = usrReducer(reducer,intialState); here reducer is a function and its take action as a arguments.
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
    // console.log(`New Item Added: ${itemName} Date:${itemDueDate}`);
    // setTodoItems((currValue) => {
    //   const newTodoItems = [
    //     ...todoItems,
    //     { name: itemName, dueDate: itemDueDate },
    //   ];
    //   return newTodoItems;
    // });
    // setTodoItems((currValue) => [
    //   ...currValue,
    //   { name: itemName, dueDate: itemDueDate },
    // ]);
  };

  const deleteItem = (todoItemName) => {
    // const newTodoItems = todoItems.filter(
    //   (todoItem) => todoItem.name !== todoItemName
    // );
    // console.log(`Item Deleted:${todoItemName}`);
    // setTodoItems(newTodoItems);
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        dispatchTodoItems,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
