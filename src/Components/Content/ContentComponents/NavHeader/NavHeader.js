import React from "react";
import "./NavHeader.css";
import HideViewSideBar from "@/Components/SideBar/SideBarComponents/HideViewSideBar";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
export default function NavHeader() {
  return (
    <div className="headnav">
      <div className="leftnavheader">
        <HideViewSideBar />
        <form action="">
          <input type="text" placeholder="search..." />
        </form>
      </div>
      <div className="rightnavheader">
        <div class="mr-3 z-0 relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span class=" z-0 font-medium text-gray-600 dark:text-gray-300"><NotificationsNoneIcon/></span>
        </div>
        <div class="relative">
          <img
            class="w-10 h-10 rounded-full"
            src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
            alt="img"
          />
          <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
      </div>
    </div>
  );
}
