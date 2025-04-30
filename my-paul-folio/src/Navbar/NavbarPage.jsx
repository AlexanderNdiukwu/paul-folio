import React from 'react'
import Logo from './Logo'
import Navbarbtn from './NavbarBtn/Navbarbtn'

const NavbarPage = () => {
  return (
    <div className='bg-[#0A0A0F] flex items-center justify-between'>

        <div>
        <Logo/>

        </div>

        <div className='flex text-white gap-3 '>
            <p>About</p>
            <p>Skills</p>
            <p>Projects</p>
            <p>Experience</p>
            <p>Contact</p>
        </div>

        <div className='flex gap-3'>

            <Navbarbtn btndetail='Hire me' style='bg-[#FF4F00] text-white px-4 py-2 rounded-[26843500px]'/>
            <Navbarbtn btndetail='Get in Touch' style='bg-gradient-to-r from-[#00D9F5] via-[#8A00FF] to-[#4E4E75] bg-clip-text text-transparent  px-4 py-2 rounded-[26843500px]' style1="inline-block rounded-[26843500px] bg-gradient-to-r from-[#00D9F5] via-[#8A00FF] to-[#4E4E75] p-[2px]"/>


            
        </div>



      
    </div>
  )
}

export default NavbarPage
