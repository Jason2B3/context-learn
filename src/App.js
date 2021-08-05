import logo from "./logo.svg";
import "./App.css";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import ActivateSight from "./ActivateSight";

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <ComponentA />
      <ComponentB />
      <ActivateSight />
    </div>
  );
}

export default App;
