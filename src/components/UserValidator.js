import React, { useState } from "react";

import Modal from "./Modal/Modal";
import UserForm from "./UserForm";

const UserValidator = (props) => {
  const [isValidated, setIsValidated] = useState(true);
  const [isError, setIsError] = useState("");

  const saveUserDataHandler = (enteredUser) => {
    if (enteredUser.userage === "" || enteredUser.username === "") {
      setIsValidated(false);
      setIsError("Please enter valid name and age (non-empty values).");
    } else if (enteredUser.userage < 0) {
      setIsValidated(false);
      setIsError("Please enter valid name and age (age > 0).");
    } else {
      setIsValidated(true);
      const userData = {
        ...enteredUser,
        id: Math.random().toString(),
      };

      props.onAddUser(userData);
    }
  };
  const resetValidate = () => {
    setIsValidated(true);
  };

  return (
    <div>
      {!isValidated && <Modal onButton={resetValidate} error={isError} />} ||
      {isValidated && <UserForm onSaveUserData={saveUserDataHandler} />};
    </div>
  );
};

export default UserValidator;
