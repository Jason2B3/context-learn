import React, { useState } from "react";
import { useCustomContextHook } from "../contexts/MultiplyContext";
export default function Gate2() {
  const { val, onClickHandler } = useCustomContextHook();
  return (
    <>
      <h2>Second Counter</h2>
      <p>Count is: {val}</p>
      <button onClick={onClickHandler}>Multiply by 1.5</button>
    </>
  );
}
