import React from "react";

import ToDoForm from "./ToDoForm";
import "./ObjectCreated.css";

const ObjectCreated = (props) => {
  const saveUserDataHandler = (enteredUser) => {
    const userData = {
      ...enteredUser,
      id: Math.random().toString(),
    };
    props.onAddUser(userData);
  };
  return <ToDoForm onSaveUserData={saveUserDataHandler} />;
};

export default ObjectCreated;
