import React, { useState } from "react";

import Modal from "./Modal/Modal";
import UserForm from "./UserForm";

const UserValidator = (props) => {
  const [isValidated, setIsValidated] = useState(true);

  const saveUserDataHandler = (enteredUser) => {
    if (enteredUser.userage === "") {
      setIsValidated(false);
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
      {!isValidated && <Modal onButton={resetValidate} />} ||
      {isValidated && <UserForm onSaveUserData={saveUserDataHandler} />};
    </div>
  );
};

export default UserValidator;
