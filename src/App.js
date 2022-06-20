import React, { Component } from "react";
import "./App.css";
import ToDoForm from "./components/ToDoForm.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, World! </h1>
        <ToDoForm></ToDoForm>
      </div>
    );
  }
}

export default App;
