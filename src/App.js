import React, { useReducer, useEffect } from "react";
import MyInput from "./components/MyInput";
import "./App.css";

function formReducer(state, action) {
  // Update the state value and check the validity (called when the email field's typed in)
  if (action.type === "UPDATE_EMAIL") {
    console.log("email, yo");
    const currentVal = action.value;
    return {
      ...state,
      emailInput: currentVal,
      emailIsValid: currentVal.includes("@"),
    };
  }
  // Update the state value (called when the password field's typed in)
  if (action.type === "UPDATE_PASSWORD") {
    console.log("password yo");
    const currentVal = action.value;
    return {
      ...state,
      passwordInput: currentVal,
      passwordIsValid: currentVal.trim().length >= 2,
    };
  }

  // Check if state.emailIsValid and state.passwordIsValid are both true.
  // If so, set formIsValid to true, and vice versa
  if (action.type === "CHECK_FORM") {
    // Check if the fields are empty first (we start them off as valid for coloring purposes)
    const emptyEmail = state.emailInput.trim().length === 0;
    const emptyPassword = state.passwordInput.trim().length === 0;
    if (emptyEmail || emptyPassword) return { ...state, formIsValid: false };
    // Check if they are legitimate after we know the values aren't ""
    const bothValidLegit = state.emailIsValid && state.passwordIsValid;
    if (bothValidLegit) alert("Login Complete");
    return { ...state, formIsValid: bothValidLegit };
  }
  // If action.type is different than the above two options, return state as is
  return state;
  //@ Note, we assign an invalid class to input fields that are not valid
  //@ This colors them red in our CSS
}

function App(props) {
  const [formState, formDispatch] = useReducer(formReducer, {
    // WHEN: People type in the email or password field
    // THEN: The reducer updates the following state values to what's typed
    emailInput: "",
    passwordInput: "",
    // WHEN:(same as above)
    // THEN: The reducer updates the following state values to true/false
    emailIsValid: true,
    passwordIsValid: true,
    // WHEN: Someone hits the submit button
    // THEN: reducer updates the following state values to true/false
    formIsValid: false,
    //~ We set the input fields as valid initially so we don't color them red on startup
    //~ Made it so we can't submit successfully when nothing's typed though
  });

  //~ ---------------------- Handler Zone -------------------------------
  //@ On submit, check the form's validity (via formReducer)
  const submitHandler = function (e) {
    e.preventDefault();
    formDispatch({ type: "CHECK_FORM" });
  };
  //@ After the field is typed in, update our email's state value
  const emailHandler = function (e) {
    formDispatch({ type: "UPDATE_EMAIL", value: e.target.value });
  };
  //@ After the field is typed in, update our password's state value
  const passwordHandler = function (e) {
    formDispatch({
      type: "UPDATE_PASSWORD",
      value: e.target.value,
    });
  };

  return (
    <form>
      <h3>Enter Email and Password</h3>
      <MyInput
        value={formState.emailInput}
        onChange={emailHandler}
        placeholder={"Enter email..."}
        className={formState.emailIsValid ? "" : "invalid"}
      />
      <MyInput
        value={formState.passwordInput}
        onChange={passwordHandler}
        placeholder={"Enter password..."}
        className={formState.passwordIsValid ? "" : "invalid"}
      />
      <button type="submit" onClick={submitHandler}>
        Submit
      </button>
    </form>
  );
}

export default App;
