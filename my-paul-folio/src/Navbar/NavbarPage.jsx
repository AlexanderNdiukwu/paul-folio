import React from 'react'
import Navbarbtn from '../Pagebutton/Pagebtn'
import Logo from './Logo'

const NavbarPage = () => {
  return (
    <div className=' backdrop-blur-xs flex items-center justify-between '>

        <div >
        <Logo/>
        </div>

        <div className='flex border border-black/100 rounded-md  backdrop-blur-3xl  gap-3'>
            <p className='hover:bg-[#00D9F5] hover:border-r hover:text-white py-2 px-3 rounded-l-md'>About</p>
            <p className='hover:bg-[#00D9F5] hover:border hover:text-white py-2 px-3 '>Skills</p>
            <p className='hover:bg-[#00D9F5] hover:border hover:text-white py-2 px-3 '>Projects</p>
            <p className='hover:bg-[#00D9F5] hover:border hover:text-white py-2 px-3 '>Experience</p>
            <p className='hover:bg-[#00D9F5] hover:border-l hover:text-white py-2 px-3 rounded-r-md'>Contact</p>
        </div>

        <div className='flex gap-3 '>
           <Navbarbtn/>

            <Navbarbtn btndetail='Hire me' style='w-36 text-center bg-[#A133FF] rounded-[12px] font-bold  px-8 py-2 '/>
            <Navbarbtn btndetail='Get in Touch' style='bg-black  items-center justify-center  text-[#8A00FF] flex  px-8 py-1.5 rounded-lg whitespace-nowrap' style1=" text-center justify-center  items-center  p-0.5 inline-block rounded-lg bg-gradient-to-r from-[#00D9F5] via-[#8A00FF] to-[#4E4E75] "/>


            
        </div>



      
    </div>
  )
}

export default NavbarPage
