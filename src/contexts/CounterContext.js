// CounterContext.js

// Import your required hooks
import { useState, createContext, useContext } from "react";
// Create and export your custom hook
const CounterContext = createContext();
export const useCounter = () => useContext(CounterContext) 

function CounterContextProvider(props) {
  //% Component 1: Counter.js
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  const counter_js= {count, increaseCount, decreaseCount}

  const shareThese = { counter_js };
  return (
    <CounterContext.Provider value={shareThese}>
      {props.children}
    </CounterContext.Provider>
  );
}
export default CounterContextProvider;
