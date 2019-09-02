import React from "react";

const Discrepancy = props => {
  return (
    <div>
      <h3>Discrepancies</h3>
      <div>Current: {props.current} </div>
      <div>Biggest so Far: {props.biggest} </div>
    </div>
  );
};

export default Discrepancy;
