import React, { Component, useState } from "react";
import "./App.css";
import RenderUser from "./components/User/RenderUser";
import UserValidator from "./components/UserValidator";

const DATA = [];

function App() {
  const [user, setUser] = useState(DATA);

  const addUserHandler = (user) => {
    setUser((prevUser) => {
      return [user, ...prevUser];
    });
  };

  const deleteUserHandler = (iduser) => {
    setUser(prevUser => {
    const user = prevUser.filter((val) => {
        return val.id !==  iduser
   })
       return user;
       })
  };

  return (
    <div className="App">
      <UserValidator onAddUser={addUserHandler} />
      <RenderUser users={user} onDeleteUsers={deleteUserHandler} />

    </div>
  );
}

export default App;
