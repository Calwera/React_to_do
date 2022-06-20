import React from "react";

import "./RenderUser.css";

const RenderUser = (props) => {
  return (
    <div className="render-users">
      <h2 className="user-name">{props.username}</h2>
      <h2 className="user-age">{props.userage}</h2>
    </div>
  );
};

export default RenderUser;
