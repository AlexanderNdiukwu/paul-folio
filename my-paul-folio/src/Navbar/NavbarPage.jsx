import React from 'react'
import Navbarbtn from '../Pagebutton/Pagebtn'
import Logo from './Logo'

const NavbarPage = () => {
  return (
    <div className=' backdrop-blur-xs flex items-center justify-between '>

        <div >
        <Logo/>
        </div>

        <div className='flex border border-black/100 rounded-md py-2 px-3 backdrop-blur-3xl  gap-3'>
            <p>About</p>
            <p>Skills</p>
            <p>Projects</p>
            <p>Experience</p>
            <p>Contact</p>
        </div>

        <div className='flex gap-3'>
           <Navbarbtn/>

            <Navbarbtn btndetail='Hire me' style='w-36 text-center bg-[#A133FF] rounded-[12px] font-bold  px-8 py-2 '/>
            <Navbarbtn btndetail='Get in Touch' style='bg-black  text-[#8A00FF]  px-8 py-1.5 rounded-[12px] whitespace-nowrap' style1=" text-center  p-0.5 inline-block rounded-[12px] bg-gradient-to-r from-[#00D9F5] via-[#8A00FF] to-[#4E4E75] "/>


            
        </div>



      
    </div>
  )
}

export default NavbarPage
