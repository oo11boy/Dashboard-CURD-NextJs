import { Telegram } from "@mui/icons-material";
import React from "react";

export default function CardStatus({name,status,icon,count}) {
  return (
    <div key={name} className="flex flex-col w-1/4 bg-white m-4 shadow-xl p-6 h-44 rounded-lg justify-between">
      <div className="flex justify-between items-center w-full">
        <h2 className="text-2xl font-semibold">{name}</h2>
        {icon}
      </div>
      <h2 className="text-2xl font-semibold">{count}</h2>
      <h3>{status} completed</h3>
    </div>
  );
}
