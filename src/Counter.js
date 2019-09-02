import React from "react";

const Counter = props => {
  return (
    <div>
      <div>Heads: {props.heads} </div>
      <div>Tails: {props.tails}</div>
    </div>
  );
};

export default Counter;
