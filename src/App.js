import "./App.css";

import Counter from "./components/Counter";
import CounterContextProvider from "./contexts/CounterContext";

function App(props) {

  return (
    <CounterContextProvider>
      <h1>Context API</h1>
      <Counter/>
    </CounterContextProvider>
  );
}

export default App;
