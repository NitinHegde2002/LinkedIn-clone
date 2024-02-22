import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="src\unsplashBG.jpg" alt="BGimg" />
        <div className="sidebar__avatar">
          <img src="src\avatar.jpg" alt="dp" />
        </div>
        <h2>Nitin Hegde </h2>
        <h4>hegde.nitin@yahoo.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewed you</p>
          <p className="sidebar__statnumb">25</p>
        </div>
        <div className="sidebar__stat">
          <p>views on post</p>
          <p className="sidebar__statnumb">62</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactJS")}
        {recentItem("programming")}
        {recentItem("java")}
        {recentItem("c++")}
        {recentItem("python")}
        {recentItem("JSSATEB")}
      </div>
    </div>
  );
}

export default Sidebar;
