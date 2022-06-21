import React from "react";

import "./RenderUser.css";

const RenderUser = (props) => {
  return (
    <div className="render-users">
      {props.users.map((user) => (
        <div className="render-user">
          <div>
            {user.username} ({user.userage} years old)
          </div>
        </div>
      ))}
    </div>
  );
};

export default RenderUser;
