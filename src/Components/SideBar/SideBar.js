import React from "react";
import ItemSideBar from "./SideBarComponents/ItemSideBar/ItemSideBar";
import DashboardIcon from "@mui/icons-material/Dashboard";
export default function SideBar() {
  return (
    <div className="sidebar flex flex-col align-middle justify-start bg-slate-950 h-lvh">
      <div className="flex flex-row  items-center justify-start mt-2 mb-2 text-slate-50 p-3">
        <DashboardIcon  className="mr-3  text-2xl "  />
        <ItemSideBar name="Dashboard" src="../" />
      </div>
      
    </div>
  );
}
