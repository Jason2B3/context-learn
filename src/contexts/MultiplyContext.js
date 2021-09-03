import React, { useState, createContext, useContext } from "react";
const AAA = createContext();
export const useCustomContextHook= () => useContext(AAA)

export default function BBB(props) {
  // CONTEXT FOR THE SECOND COUNTER- wrap provider tags around the start of its branch
  const [val, setVal] = useState(4);
  const onClickHandler = function () {
    setVal(val * 1.5);
  };
  const distribution = { val, setVal, onClickHandler};
  return <AAA.Provider value={distribution}>{props.children}</AAA.Provider>;
}
