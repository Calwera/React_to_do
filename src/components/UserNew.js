import React from "react";

import UserForm from "./UserForm";
import "./UserNew.css";

const UserNew = (props) => {
  const saveUserDataHandler = (enteredUser) => {
    const userData = {
      ...enteredUser,
      id: Math.random().toString(),
    };
    props.onAddUser(userData);
  };
  return <UserForm onSaveUserData={saveUserDataHandler} />;
};

export default UserNew;
