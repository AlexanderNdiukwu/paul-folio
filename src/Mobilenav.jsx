import React from 'react'
import { MdHome } from "react-icons/md";
import { MdOutlineEngineering } from "react-icons/md";
import { MdOutlineWorkHistory } from "react-icons/md";
export default function Mobilenav() {
  return (
    <div className='fixed top-27 text-white right-0 md:hidden block '>
      <div className='w-8 h-fit py-3 border break-all border-white/5 gap-2 rounded-l-md flex flex-col justify-center items-center  backdrop-blur-3xl'>
        
         <a className='text-[#f02e00] border-b border-white/20 pb-1 hover:text-white' href="#Home"><MdHome /></a> 
         <div className='text-[#f02e00] border-b border-white/20 pb-1'><a href="#About"><MdOutlineEngineering /></a></div>
         <p className='text-[#f02e00]'><a href="#Projects"><MdOutlineWorkHistory /></a></p>
        

      </div>
    </div>
  )
}
