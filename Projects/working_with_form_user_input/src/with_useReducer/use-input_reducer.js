import { useReducer } from "react";
const initialState = {
  value: "",
  isTouch: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouch: state.isTouch };
  }
  if (action.type === "BLUR") {
    return { isTouch: true, value: state.value };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isTouch: false,
    };
  }
  return {
    value: "",
    isTouch: false,
  };
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(inputStateReducer, initialState);

  //  const valueIsValid = validateValue(enteredValue);
  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouch;

  //
  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };
  const inputBlurHandler = (e) => {
    dispatch({ type: "BLUR" });
  };

  //
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  //
  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
