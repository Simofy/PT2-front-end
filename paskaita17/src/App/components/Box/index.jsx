import React from "react";
import "./box.css";

export default function Box(props) {
  const { setShoppingList, exist, shoppingId, name, price, vegan } = props;
  return (
    <div className="box">
      <div>
        <span>{name}</span>
        <span>{price.toFixed(2)}</span>
      </div>
      <div>
        <button
          onClick={() => {
            setShoppingList((oldShoppingList) => {
              const exist = oldShoppingList.includes(shoppingId);
              if (exist) {
                const index = oldShoppingList.indexOf(shoppingId);
                oldShoppingList.splice(index, 1);
              } else {
                oldShoppingList.push(shoppingId);
              }
              return [...oldShoppingList];
            });
          }}
        >
          {exist ? "Remove" : "Add"}
        </button>
      </div>
    </div>
  );
}
