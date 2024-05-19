"use client"
import React, { useContext } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { HideViewSideBarContext } from '@/ContextApi/HideViewSideBarContext';
export default function HideViewSideBar() {
  const {SideBarStatus,setSideBarStatus}=useContext(HideViewSideBarContext)

  return (
    <MenuIcon className=' cursor-pointer' onClick={()=>setSideBarStatus(!SideBarStatus)}/>
  )
}
