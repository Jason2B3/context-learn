import "./App.css";

import ActivateSight from "./ActivateSight";
import Counter from "./components/Counter";
import CounterContextProvider from "./contexts/CounterContext";

function App() {
  function add1(){
    console.log(9)
   }
   let obj={add1}
   console.log(obj)
  return (
    <CounterContextProvider>
      <h1>Context API</h1>
      <Counter/>
      {/* <ActivateSight /> */}
    </CounterContextProvider>
  );
}

export default App;
