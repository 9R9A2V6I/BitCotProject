import React from "react";
import "./TopBar.css";
import Button from "@mui/material/Button";
import personImg from "../../Assets/download.jpg";
import { NavLink } from "react-router-dom";
import {
  Menu,
  Search,
  NotificationsActive,
  Language,
  Settings
} from "@mui/icons-material";

function TopBar() {
  return (
    <>
      <div className="mainContainer">
        <div className="leftTopBar">
          <h2>
            bit<span className="logoSpan">cot</span>
          </h2>
          <div className="centerTopBar">
            <Menu className="icons" />
            <div className="searchBar">
              <Search className="icons" />
              <input type="text" className="searchInput" placeholder="Search" />
            </div>
          </div>
        </div>

        <div className="rightTopbar">
          <NotificationsActive />
          <Language />
          <NavLink to="LoginIn">
          <Settings/>
          </NavLink>
          <img src={personImg} alt="" className="userImage" />
          <div className="userDetails">
            <p className="userName">Charlie Howard </p>
            {/* <p className="userProff">Frontend Developer</p> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
