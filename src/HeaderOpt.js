import React from "react";
import "./HeaderOpt.css";

function HeaderOpt({ Avatar, Icon, title }) {
  return (
    <div className="headerOpt">
      {Icon && <Icon className="headerOpt__icon" />}
      {Avatar && <Avatar className="avatar" src={Avatar} />}
      <h3 className="headerOpt__title">{title}</h3>
    </div>
  );
}

export default HeaderOpt;
