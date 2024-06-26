// sidebar container
"use client";
import React, { useContext } from "react";
import ItemsSideBar from "./SideBarComponents/ItemSideBar/ItemSideBar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import CancelIcon from "@mui/icons-material/Cancel";
import "./SideBar.css";
import { HideViewSideBarContext } from "@/ContextApi/HideViewSideBarContext";

export const sidebaritems = [
  { name: "Dashboard", src: "../", icon: <DashboardIcon className="mr-2" /> },
  { name: "Pages", src: "../", icon: <LayersIcon className="mr-2" /> },
];
export default function SideBar() {
  const { SideBarStatus, setSideBarStatus } = useContext(
    HideViewSideBarContext
  );
  return (
    <div
      className={`${
        SideBarStatus ? "showsidebar" : "hidesidebar wi-0"
      } sidebar flex flex-col align-middle justify-start bg-slate-950 h-lvh`}
    >
      {/* hide menu icon */}
      <CancelIcon
        onClick={() => setSideBarStatus(false)}
        className="text-white m-2 cancelicon text-2xl cursor-pointer"
      />
      {/* items sidebar */}
      <ItemsSideBar sidebaritems={sidebaritems} />
    </div>
  );
}
