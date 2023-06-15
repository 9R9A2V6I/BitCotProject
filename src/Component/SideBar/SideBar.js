import React, { useState } from "react";
import "./SideBar.css";
import { StackedBarChart, ExpandMore, ExpandLess } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

function SideBar() {
  const [dropDown, setDropDown] = useState(false);
  const [rotateChevron, setRotateChevron] = useState(false);
  const handleToggle = () => {
    setDropDown((current) => !current);
    setRotateChevron(!rotateChevron);
  };
  const rotate = rotateChevron ? "rotate(180deg)" : "rotate(0)";
  return (
    <div className="mainSidebarContainer">
      <div className="topbar" onClick={handleToggle}>
        <h1 className="dropHead">
          <StackedBarChart />
          Ecommerce
        </h1>
        <ExpandMore
          style={{ transform: rotate, transition: "all 0.2s linear" }}
        />
      </div>
      {dropDown && (
        <div className="dropData">
          <NavLink to="/ProductPage" className="dropDataTag">
            <p>Product List</p>
          </NavLink>
          <p className="dropDataTag">
          Add Product
          </p>
        </div>
      )}
    </div>
  );
}

export default SideBar;
