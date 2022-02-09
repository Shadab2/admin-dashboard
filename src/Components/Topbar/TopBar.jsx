import React from "react";
import "./topbar.css";
import {
  NotificationsNoneOutlined,
  Settings,
  Language,
} from "@material-ui/icons";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="top-left">
          <span className="logo">Admin</span>
        </div>
        <div className="top-right">
          <div className="topbar-icon-container">
            <NotificationsNoneOutlined />
            <span className="top-icon-badge">5</span>
          </div>
          <div className="topbar-icon-container">
            <Language />
            <span className="top-icon-badge">5</span>
          </div>
          <div className="topbar-icon-container">
            <Settings />
          </div>
          <img
            src="https://w0.peakpx.com/wallpaper/378/180/HD-wallpaper-chris-evans-captain-america-defending-jacob.jpg"
            alt=""
            className="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
