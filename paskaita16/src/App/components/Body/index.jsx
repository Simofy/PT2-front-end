import React, { useState } from "react";

function CalculateAAndB({ A, B }) {
  console.log("CalculateAAndB Was rendered!");
  const [counter, setCounter] = useState(0);
  console.log(setCounter);
  return (
    <div>
      <input name="set-number" />
      <button
        onClick={() => {
          const { value } = document.querySelector("input[name=set-number]");
          setCounter(value);
        }}
      >
        Add
      </button>
      <p>{counter}</p>
    </div>
  );
}

export default function Body() {
  return (
    <div className="container">
      <CalculateAAndB A={10} B={20} />
    </div>
  );
}
