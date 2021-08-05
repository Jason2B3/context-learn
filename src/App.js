import "./App.css";

import ActivateSight from "./ActivateSight";
import MyCounter from "./components/MyCounter";

function App() {
  return (
    <div className="App">
      <h1>Context API</h1>
      <MyCounter/>
      <ActivateSight />
    </div>
  );
}

export default App;
