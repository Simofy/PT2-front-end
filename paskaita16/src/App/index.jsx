import React from "react";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App(props) {
  const kintamasis = 10;

  const kitasKintamasis = kintamasis * 10;

  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default function TestComponent() {
  return (
    <div className="body">
      <App />
    </div>
  );
}
