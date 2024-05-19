// sidebar container
"use client"
import React, { useContext } from "react";
import ItemsSideBar from "./SideBarComponents/ItemSideBar/ItemSideBar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LayersIcon from "@mui/icons-material/Layers";
import './SideBar.css'
import { HideViewSideBarContext } from "@/ContextApi/HideViewSideBarContext";
export const sidebaritems = [
  { name: "Dashboard", src: "../", icon: <DashboardIcon className="mr-2" /> },
  { name: "Pages", src: "../", icon: <LayersIcon className="mr-2" /> },
];
export default function SideBar({width}) {

    const {SideBarStatus}=useContext(HideViewSideBarContext)
  return (
    <div className={`${SideBarStatus ? 'showsidebar':'hidesidebar'} ${width} sidebar flex flex-col align-middle justify-start bg-slate-950 h-lvh`}>
      <ItemsSideBar sidebaritems={sidebaritems} />
    </div>
  );
}
