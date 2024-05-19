import React from "react";
import HideViewSideBar from "../SideBar/SideBarComponents/HideViewSideBar";

export default function Content({width}) {
  return (
    <div className={`${width} content`}>
      <div className="headnav">
        <HideViewSideBar />
      </div>
    </div>
  );
}
