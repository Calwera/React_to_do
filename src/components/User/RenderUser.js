import React, { useReducer } from "react";

import "./RenderUser.css";

const RenderUser = (props) => {

  const userRemoveHandler = (user) => {
   user.target = <div></div>
  }

  return (
    <div className="render-users">
      {props.users.map((user) => (
        <div onClick={userRemoveHandler} value={user} className="render-user">
          <div className="render-text">
            {user.username} ({user.userage} years old)
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderUser;
