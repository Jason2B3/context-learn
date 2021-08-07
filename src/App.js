import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterContextProvider from "./contexts/CounterContext";
import { useCounter } from "./contexts/CounterContext";

function App(props) {
  const { count, increaseCount, decreaseCount } = useCounter(); //! try to import our custom hook
  return (
    <React.Fragment>
      <h1>Context API</h1>
      <Counter />
    </React.Fragment>
  );
}

export default App;
