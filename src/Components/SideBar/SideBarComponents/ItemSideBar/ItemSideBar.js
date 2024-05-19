// sidebar items
import Link from "next/link";
import React from "react";

export default function ItemsSideBar({ sidebaritems }) {
  return sidebaritems.map((item) => {
    return (
      <div
        key={item.name}
        className=" hover:bg-slate-800 flex flex-row  items-center justify-start mt-1 mb-1 text-slate-50 px-3 py-2"
      >
        {item.icon}
        <Link className="text-xl" href={item.src} title={item.name}>
          {item.name}
        </Link>
      </div>
    );
  });
}
