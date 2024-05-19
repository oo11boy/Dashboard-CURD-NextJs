import Content from "@/Components/Content/Content";
import SideBar from "@/Components/SideBar/SideBar";

import React from "react";

export default function page() {
  return (
    <div className="dshcontainer">
      <SideBar />
      <Content />
    </div>
  );
}
