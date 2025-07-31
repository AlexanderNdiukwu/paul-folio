import React from 'react'
import { MdHome, MdOutlineEngineering, MdOutlineWorkHistory } from "react-icons/md";

export default function Mobilenav() {
  return (
    <div className='fixed top-28 right-0 md:hidden block z-50'>
      <div className='w-8 py-3 border border-white/5 gap-2 rounded-l-md flex flex-col justify-center items-center backdrop-blur-3xl'>

        <a 
          className='text-[#f02e00]/70 hover:text-white border-b border-white/20 pb-1 transition-colors duration-300'
          href="#Home"
        >
          <MdHome className="w-6 h-6" />
        </a>

        <a 
          className='text-[#f02e00]/70 hover:text-white border-b border-white/20 pb-1 transition-colors duration-300'
          href="#About"
        >
          <MdOutlineEngineering className="w-6 h-6" />
        </a>

        <a 
          className='text-[#f02e00]/70 hover:text-white transition-colors duration-300'
          href="#Projects"
        >
          <MdOutlineWorkHistory className="w-6 h-6" />
        </a>

      </div>
    </div>
  )
}
