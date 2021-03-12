import React, { useEffect, useState } from "react";
import "./App.css";
import Box from "./components/Box";

export default function App() {
  const [productList, setProductList] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  useEffect(() => {
    //https://simutis.dev/api/generate-shopping-cart
    fetch("https://simutis.dev/api/generate-shopping-cart?limit=10")
      .then((res) => res.json())
      .then((list) => setProductList(list));
  }, []);
  useEffect(() => {
    console.log(shoppingList.length);
  }, [shoppingList]);
  return (
    <div className="app">
      <h3>{shoppingList.length}</h3>
      {productList.map(({ name, price, vegan }, index) => (
        <Box
          setShoppingList={setShoppingList}
          exist={shoppingList.includes(index)}
          shoppingId={index}
          name={name}
          price={price}
          vegan={vegan}
        />
      ))}
    </div>
  );
}
