import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  TrendingUp,
  Timeline,
  VerifiedUserOutlined,
  MarkunreadMailboxOutlined,
  Money,
  BarChartOutlined,
  MessageOutlined,
  FeedbackOutlined,
  InfoOutlined,
  ShopOutlined,
} from "@material-ui/icons";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">DashBoard</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item active">
              <LineStyle className="sidebar-icon" />
              Home
            </li>
            <li className="sidebar-list-item">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
            <li className="sidebar-list-item ">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Statistics</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <VerifiedUserOutlined className="sidebar-icon" />
              User
            </li>
            <li className="sidebar-list-item">
              <MarkunreadMailboxOutlined className="sidebar-icon" />
              Products
            </li>
            <li className="sidebar-list-item ">
              <Money className="sidebar-icon" />
              Transaction
            </li>
            <li className="sidebar-list-item ">
              <BarChartOutlined className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <VerifiedUserOutlined className="sidebar-icon" />
              Mail
            </li>
            <li className="sidebar-list-item">
              <FeedbackOutlined className="sidebar-icon" />
              Feedback
            </li>
            <li className="sidebar-list-item">
              <MessageOutlined className="sidebar-icon" />
              Messagees
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <ShopOutlined className="sidebar-icon" />
              Manage
            </li>
            <li className="sidebar-list-item">
              <TrendingUp className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <InfoOutlined className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
