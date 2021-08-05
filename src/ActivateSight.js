import { useState } from "react";

function ActivateSight() {
  const [title, setTitle] = useState("");
  const clickHandler = () => {
    console.log(title);
    setTitle("UPDATED");
  };  
  return (<button style={{height:'50px'}} onClick={clickHandler}>React-sight activate!</button>)
}
export default ActivateSight;