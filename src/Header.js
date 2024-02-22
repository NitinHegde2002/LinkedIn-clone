import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import HeaderOpt from "./HeaderOpt";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <div className="icon">
          <LinkedInIcon />
        </div>
        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOpt Icon={HomeIcon} title="Home" />
        <HeaderOpt Icon={PeopleIcon} title="My Network" />
        <HeaderOpt Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOpt Icon={ChatIcon} title="Messages" />
        <HeaderOpt Icon={NotificationsIcon} title="Notification" />
        {/* <HeaderOpt Avatar="src/avatar.jpg" title="me" /> */}
        <HeaderOpt Icon={AccountCircleIcon} title="me" />
      </div>
    </div>
  );
}

export default Header;
