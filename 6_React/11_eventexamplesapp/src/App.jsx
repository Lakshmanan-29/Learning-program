import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(5);

  function increment() {
    setCount(count + 1);
    sayHello();
  }

  function decrement() {
    setCount(count - 1);
  }

  function sayHello() {
    console.log("Hello, the button was clicked");
  }

  function sayWelcome(message) {
    alert(message);
  }

  function handleClick(event) {
    alert("I was clicked");
  }

  return (
    <div style={{ margin: "20px" }}>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <br />
      <button onClick={decrement}>Decrement</button>
      <br />
      <button onClick={() => sayWelcome("Welcome")}>Say welcome</button>
      <br />
      <button onClick={handleClick}>Click on me</button>

      <CurrencyConvertor />
    </div>
  );
}

export default App;
