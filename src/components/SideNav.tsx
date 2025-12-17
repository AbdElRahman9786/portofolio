'use client'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Links } from './Links';
import CloseIcon from '@mui/icons-material/Close';
export const SideNav = () => {
    const [open, setOpen] = useState<boolean>(false);
    function toggle(): void {
        setOpen((prev)=>!prev)
    }
  return (
    <>
    <div className='max-xl:block hidden'>
    {open ?(
        <div  onClick={toggle} className='cursor-pointer px-1 fixed top-3 right-5  py-1  rounded-2xl border border-gray-700 shadow-2xl bg-[#1a1a1a] text-white  z-50'>
             <CloseIcon fontSize='large'  />
        </div>
        ): (
        <div onClick={toggle} className='cursor-pointer px-1 fixed top-3 right-5  py-1  rounded-2xl border border-gray-700 shadow-2xl bg-[#1a1a1a] text-white  z-50'>
        <MenuIcon fontSize='large'/></div>)}
    <div className={`fixed top-0 right-0 h-full z-40 bg-[#1a1a1a] border-l border-gray-800 shadow-lg transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-[-100%]'}`}>
      <h2 className='text-xl  font-bold p-5 border-b border-b-gray-800'>Menu</h2>
      <div className='px-10 py-5 flex flex-col gap-5 w-60 z-10'>
        <Links />
      </div>
    </div>
    </div>
    </>
  )
}
