import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItem";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // let foodItems = [];
  // let foodItems = ["Dal", "Green Vegetable", "Roti", "Milk"];

  // let textStateArr = useState("Food Item Entered By User");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];
  // console.log(`Current value of textState: ${textToShow}`);

  let [foodItems, setFoodItems] = useState([]);

  let onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      // note: ... operator add all the value of previous array in the current array or we can use .push also
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("Food value entered is " + newFoodItem);
    }
    // console.log(event);
    // setTextState(event.target.value);
  };

  // if(foodItems.length === 0){
  //   return <h3>I am still hungry.</h3>
  // }

  // let emptyMessage = foodItems.length === 0 ? <h3>I am still hungry</h3> : null;

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        {/* note: look below code snipet carefully */}
        {/* {emptyMessage} */}
        <FoodInput handleKeyDown={onKeyDown} />
        <ErrorMessage items={foodItems} />
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems} />
      </Container>
      <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being
        </p>
      </Container>
    </>
  );
}

export default App;
