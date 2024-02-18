import React from "react";
import "./HeaderOpt.css";

function HeaderOpt({ avatar, Icon, title }) {
  return (
    <div className="headerOpt">
      {Icon && <Icon className="headerOpt__icon" />}
      {avatar && <avatar className="headerOpt__icon" src={avatar} />}
      <h3 className="headerOpt__title">{title}</h3>
    </div>
  );
}

export default HeaderOpt;
