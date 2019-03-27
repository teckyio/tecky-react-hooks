import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.incrementCounter = this.incrementCounter.bind(this);
  }
  componentDidMount() {
    this.setState({
      counter: 10
    });
  }

  componentWillUnmount() {
    this.setState({
      counter: 0
    });
  }
  incrementCounter() {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }
  render() {
    return (
      <h1 onClick={this.incrementCounter}>
        Hello, {this.props.name}
        {this.state.counter} times
      </h1>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App name="Sara" />, rootElement);
