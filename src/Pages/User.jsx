import {
  AirplanemodeActive,
  CalendarToday,
  MailOutlined,
  PermIdentity,
  Phone,
  Publish,
  Work,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Styles/user.css";

function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Hello</h1>
        <Link to="/newUser">
          <button className="addUser">Add</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://www.cheatsheet.com/wp-content/uploads/2020/11/Marvel-star-Robert-Downey-Jr.jpg"
              alt=""
              className="userShowImage"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Robert Downey</span>
              <span className="userShowDetails">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">robert@downey</span>
            </div>
            <div className="userShowInfo">
              <Work className="userShowIcon" />
              <span className="userShowInfoTitle">SDE II</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <Phone className="userShowIcon" />
              <span className="userShowInfoTitle">+871 89252020</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">10.02.1985</span>
            </div>
            <div className="userShowInfo">
              <MailOutlined className="userShowIcon" />
              <span className="userShowInfoTitle">robert@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <AirplanemodeActive className="userShowIcon" />
              <span className="userShowInfoTitle">Park Street 89089, USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <div className="userUpdateLeft">
            <span className="updateTitle">Edit</span>
            <form>
              <div className="formInput">
                <label>Name</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="@robertdowney"
                />
              </div>
              <div className="formInput">
                <label>Email</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="robertdowney@gmail.com"
                />
              </div>
              <div className="formInput">
                <label>Post</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="SDE II"
                />
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="+871 89252020"
                />
              </div>
              <div className="formInput">
                <label>Address</label>
                <input
                  type="text"
                  className="userUpdateInput"
                  placeholder="Park Street 89089, USA"
                />
              </div>
            </form>
          </div>
          <div className="userUpdateRight">
            <div className="userUpdateUpload">
              <img
                src="https://www.cheatsheet.com/wp-content/uploads/2020/11/Marvel-star-Robert-Downey-Jr.jpg"
                alt=""
                className="userUpdateImg"
              />
              <label htmlFor="file">
                <Publish className="userUpdateIcon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="userUpdateBtn">Update</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
