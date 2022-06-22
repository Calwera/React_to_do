import React, { Component, useState } from "react";
import "./App.css";
import UserNew from "./components/UserNew";
import RenderUser from "./components/User/RenderUser";

const DATA = [];

function App() {
  const [user, setUser] = useState(DATA);

  const addUserHandler = (user) => {
    setUser((prevUser) => {
      return [user, ...prevUser];
    });
  };

  const deleteUserHandler = (user) => {
    setUser();
  };

  return (
    <div className="App">
      <UserNew onAddUser={addUserHandler} />
      <RenderUser users={user} onDeleteUsers={deleteUserHandler} />
    </div>
  );
}

export default App;
