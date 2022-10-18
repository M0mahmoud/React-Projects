import useInput from "../Hooks/use-input";

const SimpleInput = (props) => {
  // Name 
  const {
    value: enteredName,
    isValid:enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset:resetName
  } = useInput(value => value.trim() !== '');
  // Email
  const {
    value: enteredEmail,
    isValid:enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset:resetEmail
  } = useInput(value => value.includes("@"));

  // const [enteredName, setEnteredName] = useState("");
  // const [enteredEmail, setEnteredEmail] = useState("");

  // const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  // const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  // const enteredNameIsValid = enteredName.trim() !== "";
  // const nameInputIsValid = !enteredNameIsValid && enteredNameTouched;

  // const enteredEmailIsValid = enteredEmail.includes("@");
  // const enteredEmailIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // const nameInputChangeHandler = (e) => {
  //   setEnteredName(e.target.value);
  // };
  // const emailInputChangeHandler = (e) => {
  //   setEnteredEmail(e.target.value);
  // };

  // const nameInputBlurHandler = (e) => {
  //   setEnteredNameTouched(true);
  // };
  // const emailInputBlurHandler = (e) => {
  //   setEnteredEmailTouched(true);
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    // setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);

    //Clear
    resetName()
    resetEmail()
    // setEnteredName("");
    // setEnteredEmail("");
    // setEnteredNameTouched(false);
    // setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control ";
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name Must Not Be Empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;