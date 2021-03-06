import React, { useContext } from "react";
import { useCounter } from "../contexts/CounterContext";

function Counter() {
  // Bring in all the shared variables fro, CounterContext.ks
  const { count, increaseCount, decreaseCount } = useCounter();
  return (
    <React.Fragment>
      <h3>Counter Component</h3>
      <p>Count is: {count}</p>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
    </React.Fragment>
  );
}
export default Counter;
