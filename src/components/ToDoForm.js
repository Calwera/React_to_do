import React, { useState } from "react";

import "./ToDoForm.css";
const ToDoForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: enteredName,
      userage: enteredAge,
    };

    props.onSaveUserData(userData);
    setEnteredAge("");
    setEnteredName("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="to-doform__fields">
        <div className="to-doform__field">
          <label>Username</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className="to-doform__field">
          <label>Age (Years)</label>
          <input
            type="number"
            step="1"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
        </div>
      </div>
      <div className="to-doform__actions">
        <button type="submit">Add user</button>
      </div>
    </form>
  );
};

export default ToDoForm;
