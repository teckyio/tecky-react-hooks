import React from "react";
import { useReducer } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    default:
      return { counter: 0 };
  }
}

function App(props) {
  const [state, dispatch] = useReducer(counterReducer, { counter: 10 });
  return (
    <h1 onClick={() => dispatch({ type: "INCREMENT" })}>
      Hello, {props.name}
      {state.counter} times
    </h1>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Sara" />, rootElement);
