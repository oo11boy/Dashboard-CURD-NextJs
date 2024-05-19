import React from "react";
import NavHeader from "./ContentComponents/NavHeader/NavHeader";

export default function Content({ width }) {
  return (
    <div className={`${width} content`}>
    <NavHeader/>
    </div>
  );
}
