import useInput from "../Hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  //First Name
  const {
    value: fName,
    isValid: fNameIsValid,
    hasError: fNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFName,
  } = useInput(isNotEmpty);

  //Last Name
  const {
    value: lName,
    isValid: lNameIsValid,
    hasError: lNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLName,
  } = useInput(isNotEmpty);
  //ُEmail
  const {
    value: eName,
    isValid: emailIsValid,
    hasError: eNameHasError,
    valueChangeHandler: emailNameChangeHandler,
    inputBlurHandler: emailNameBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;
  if (fNameIsValid && lNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    console.log(fName, lName, eName);
    resetFName();
    resetLName();
    resetEmail();
  };

  const fNameInputClasses = fNameHasError
    ? "form-control invalid"
    : "form-control ";
  const lNameInputClasses = lNameHasError
    ? "form-control invalid"
    : "form-control ";
  const eNameInputClasses = eNameHasError
    ? "form-control invalid"
    : "form-control ";

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={fNameInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={fName}
          />
          {fNameHasError && <p>Enter Your First Name</p>}
        </div>
        <div className={lNameInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lName}
          />
          {lNameHasError && <p>Enter Your Last Name</p>}
        </div>
      </div>
      <div className={eNameInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="name"
          onChange={emailNameChangeHandler}
          onBlur={emailNameBlurHandler}
          value={eName}
        />
        {eNameHasError && <p>Enter Your Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
