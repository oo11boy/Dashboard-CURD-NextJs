import React from "react";
import CardStatus from "./ProductsStatusComponent/CardStatus";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PersonIcon from '@mui/icons-material/Person';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import './ProductsStatus.css'
const status=[
  {name:"Sale",count:26 ,status:12,icon:<AttachMoneyIcon className=" bg-cyan-300 w-10 h-10 rounded-lg p-1 text-blue-700"/>},
  {name:"Customer",count:168 ,status:86,icon:<VerifiedUserIcon className=" bg-cyan-300 w-10 h-10 rounded-lg p-1 text-blue-700"/>},
  {name:"Users",count:253 ,status:253,icon:<PersonIcon className=" bg-cyan-300 w-10 h-10 rounded-lg p-1 text-blue-700"/>},
  {name:"Sale Today",count:3 ,status:3,icon:<FiberNewIcon className=" bg-cyan-300 w-10 h-10 rounded-lg p-1 text-blue-700"/>},

]
export default function ProductsStatus() {
  return (
   <>
      <div className="flex justify-between w-full py-10 px-5 text-white text-2xl">
        <h2>Products</h2>
        <button className="bg-white text-black p-2 rounded-lg text-lg">
          create new Product
        </button>
      </div>

      <div className=" translate-y-1 w-12/12 m-auto flex justify-between productcardsstatus">
     {status.map((item)=>{
      return   <CardStatus key={item.name} name={item.name} count={item.count} status={item.status} icon={item.icon}/>
     })}
      
        
      </div>
      </>
  );
}
