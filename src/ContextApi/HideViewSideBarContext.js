"use client";
import { createContext, useState } from "react";

export const HideViewSideBarContext = createContext({});

export const HideViewSideBarContextProvider = ({ children }) => {
  const [SideBarStatus, setSideBarStatus] = useState(false);
  const val = {
    SideBarStatus,
    setSideBarStatus,
  };
  return (
    <HideViewSideBarContext.Provider value={val}>
      {children}
    </HideViewSideBarContext.Provider>
  );
};
