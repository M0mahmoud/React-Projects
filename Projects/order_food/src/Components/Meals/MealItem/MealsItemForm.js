import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";
function MealsItemForm(props) {
  // Hooks
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amoutInputRef = useRef();

  // Form Submition
  const submitHandler = (e) => {
    e.preventDefault();

    // Value
    const enteredAmount = amoutInputRef.current.defaultValue;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber)
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        // To solve this problem with ref to use in component as arg.. we use forwardRef hook in this component
        ref={amoutInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>Please Enter A Valid Amount (1-5).</p>}
    </form>
  );
}

export default MealsItemForm;
