import React, { useRef, useImperativeHandle } from "react";
import "./MyInput.css";

function MyInput({ placeholder, onChange, className }, ref) {
  const inputFieldRef = useRef(null);
  const focusField = () => inputFieldRef.current.focus();
  useImperativeHandle(ref, () => {
    return {
      focusField,
    };
  });
  return (
    <>
      <input
        className={className}
        ref={inputFieldRef}
        onChange={onChange}
        placeholder={placeholder}
      ></input>
    </>
  );
}
const forwardedMyInput = React.forwardRef(MyInput);
export default forwardedMyInput;
