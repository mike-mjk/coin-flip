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

const incrementHeads = state => {
  return { heads: state.heads + 1 };
};

const incrementTails = state => {
  return { tails: state.tails + 1 };
};

const setDiscrepancy = state => {
  let currentDiscrepancy = Math.abs(state.heads - state.tails);
  return { currentDiscrepancy: currentDiscrepancy };
};

const setBiggestDiscrepancySoFar = state => {
  if (state.currentDiscrepancy > state.biggestDiscrepancy) {
    return { biggestDiscrepancy: state.currentDiscrepancy };
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleFlip = this.handleFlip.bind(this);

    this.state = {
      heads: 0,
      tails: 0,
      currentDiscrepancy: 0,
      biggestDiscrepancy: 0
    };
  }

  handleFlip() {
    const result = flip();
    if (result === "h") {
      this.setState(incrementHeads);
    } else {
      this.setState(incrementTails);
    }

    this.setState(setDiscrepancy);
    this.setState(setBiggestDiscrepancySoFar);
  }

  render() {
    const { heads, tails, currentDiscrepancy, biggestDiscrepancy } = this.state;
    return (
      <React.Fragment>
        <Counter heads={heads} tails={tails} />
        <FlipOnceButton onFlip={this.handleFlip} />
        <Discrepancy
          current={currentDiscrepancy}
          biggest={biggestDiscrepancy}
        />
      </React.Fragment>
    );
  }
}

export default App;
