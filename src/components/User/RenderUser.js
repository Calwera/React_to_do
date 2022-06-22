import React, { useState } from "react";

import "./RenderUser.css";

const RenderUser = (props) => {
  const userRemoveHandler = (user) => {
    props.onDeleteUsers(user);
  };

  return (
    <div className="render-users">
      {props.users.map((user) => (
        <div onClick={() => userRemoveHandler(user.id)} className="render-user">
          <div className="render-text">
            {user.username} ({user.userage} years old)
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderUser;
