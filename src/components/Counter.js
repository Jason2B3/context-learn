import React, { useContext } from "react";
import { useCounter } from "../contexts/CounterContext";
import Additional from "./Additional";

function Counter() {
  // Bring in all the shared variables fro, CounterContext.ks
  const { count, increaseCount, decreaseCount } = useCounter();
  const handlerA = () => alert("Handler A works");
  return (
    <React.Fragment>
      <h3>Counter Component</h3>
      <p>Count is: {count}</p>
      {/*Pass context data through props*/}
      <Additional text={"Context increase"} handler={increaseCount}/>
      <Additional text={"Context decrease"} handler={decreaseCount}/>

    </React.Fragment>
  );
}
export default Counter;
