import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setCounter(counter => 10);
    return () => {
      setCounter(counter => 0);
    };
  }, []);
  return (
    <h1 onClick={() => setCounter(counter => counter + 1)}>
      Hello, {props.name}
      {counter} times
    </h1>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Sara" />, rootElement);
