import React from 'react'
import { useCounter } from "../contexts/CounterContext";
function Additional() {
  const { increaseCount } = useCounter();
  return (
    <React.Fragment>
      <button onClick={increaseCount}>Additional</button>
    </React.Fragment>
  );
}

export default Additional;
