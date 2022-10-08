import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrappeer from "../Helpers/Wrapper";

import classes from "./styles/AddUser.module.css";

const AddUser = (props) => {
  //Use Ref
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // for user date
  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");

  //for  Error
  const [error, setError] = useState("");

  //Form &&     //Not Need Anymore because we use Ref
  // const usernameChangeHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };
  // const ageChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  //Action
  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input ",
        message: "Please Enter a valid name and age !",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age ",
        message: "Please Enter a valid age !",
      });
      return;
    }
    //.!.function.turn.date.to.arrary.to.map.fun.use.it.
    props.onAddUser(enteredUserName, enteredUserAge);

    // Clear Date After Send It
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";

    //Not Need Anymore because we use Ref
    // setEnteredAge("");
    // setEnteredUsername("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrappeer>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onHandleError={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
            //Not Need Anymore because we use Ref
            // onChange={usernameChangeHandler}
            // value={enteredUsername}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
            //Not Need Anymore because we use Ref
            // onChange={ageChangeHandler}
            // value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrappeer>
  );
};

export default AddUser;
