import React, { useRef, useImperativeHandle } from "react";
import "./MyInput.css";

function MyInput({ placeholder, onChange, className }, ref) {
  //$ Set up a local ref to point to the JSX input element
  const localInputRef = useRef(null);

  //$ Create a handler that performs a minor action using the local ref
  const focusField = () => localInputRef.current.focus();
  //$ Use your forwarded ref to let the parent take the focusField handler
  useImperativeHandle(ref, () => {
    return {
      focusField, // will share these with parent component
    };
  });

  return (
    <>
      <input
        className={className}
        ref={localInputRef}
        onChange={onChange}
        placeholder={placeholder}
      ></input>
    </>
  );
}
const forwardedMyInput = React.forwardRef(MyInput);
export default forwardedMyInput;
