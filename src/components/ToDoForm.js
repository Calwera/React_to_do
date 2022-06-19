import React from "react";

import "./ToDoForm.css";
const ToDoForm = () => {
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
