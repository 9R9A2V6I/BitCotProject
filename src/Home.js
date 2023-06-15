import React from "react";
import TopBar from "./Component/TopBar/TopBar";
import SideBar from "./Component/SideBar/SideBar";
import { Outlet } from "react-router";


function Home() {
  return (
    <>
      <TopBar />
      <div className="homeBar">
        <SideBar />
        
      </div>
      <Outlet/>
    </>
  );
}

export default Home;
