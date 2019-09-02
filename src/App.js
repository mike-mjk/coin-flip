import React from "react";
import "./App.css";
import Counter from "./Counter";
import Discrepancy from "./Discrepancy";
import FlipOnceButton from "./FlipOnceButton";

const flip = () => {
  const result = Math.random();
  if (result > 0.5) {
    return "h";
  } else {
    return "t";
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleFlip = this.handleFlip.bind(this);

    this.state = {
      heads: 0,
      tails: 0
    };
  }

  handleFlip() {
    const result = flip();
    if (result === "h") {
      this.setState(state => {
        return { heads: state.heads + 1 };
      });
    } else {
      this.setState(state => {
        return { tails: state.tails + 1 };
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Counter heads={this.state.heads} tails={this.state.tails} />
        <FlipOnceButton onFlip={this.handleFlip} />
      </React.Fragment>
    );
  }
}

export default App;
