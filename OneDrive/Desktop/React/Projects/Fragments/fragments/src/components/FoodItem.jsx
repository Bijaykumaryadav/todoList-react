import { useState } from "react";
import Item from "./Items";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item,event) => {
    let newItems = [...activeItems,item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
          key={item}
        />
      ))}
    </ul>
  );
};

export default FoodItems;

// Note: props is a one way communication from parent to the child
