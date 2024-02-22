import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="./unsplashBG.jpg" alt="BGimg" />
        <div className="sidebar__avatar">
          <img src="./avatar.jpg" alt="dp" />
        </div>
        <h2>Nitin Hegde</h2>
        <h4>hegde.nitin@yahoo.com</h4>
      </div>
      <div className="sidebar__bottom">
        <p>who viewed you</p>
        <p className="sidebar__statnumb">25</p>
        <p>views on post</p>
        <p className="sidebar__statnumb2">62</p>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
