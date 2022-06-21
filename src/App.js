import React, { Component, useState } from "react";
import "./App.css";
import ObjectCreated from "./components/ObjectCreated";
import RenderUser from "./components/User/RenderUser";

const DATA = [];

function App() {
  const [user, setUser] = useState(DATA);

  const addUserHandler = (user) => {
    setUser((prevUser) => {
      return [user, ...prevUser];
    });
  };
  return (
    <div className="App">
      <ObjectCreated onAddUser={addUserHandler} />
      <RenderUser users={user} />
    </div>
  );
}

export default App;
