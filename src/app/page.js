"use client";
import Content from "@/Components/Content/Content";
import SideBar from "@/Components/SideBar/SideBar";
import { HideViewSideBarContext } from "@/ContextApi/HideViewSideBarContext";

import React, { useContext } from "react";

export default function page() {
  const { SideBarStatus } = useContext(HideViewSideBarContext);
  return (
    <div className="dshcontainer">
      <SideBar width={!SideBarStatus && "wi-0"} />
      <Content  />
    </div>
  );
}
