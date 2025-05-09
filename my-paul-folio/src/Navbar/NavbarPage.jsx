import React from 'react'
import Navbarbtn from '../Pagebutton/Pagebtn'
import Logo from './Logo'

const NavbarPage = () => {
  return (
    <div className=' backdrop-blur-xs flex items-center border-b border-[#1E1E22]/70 justify-between mx-9 py-1 '>

        <div >
        <Logo/>
        </div>

        <div className='flex border border-black/20 rounded-md bg-white/20  backdrop-blur-sm shadow-2xs '>
            <p class="bg-white/10 hover:text-black/70 backdrop-blur-sm hover:border-r hover:border-r-white/5 hover:rounded-r  px-3 py-2  transition-all duration-300 ease-in-out hover:bg-white/20 hover:backdrop-blur-lg hover:shadow-xl hover:border-white/30 hover:scale-[1.02] transform">About</p>
            <p class="bg-white/10 hover:text-black/70 hover:border-x hover:rounded-lg backdrop-blur-sm hover:border-r hover:border-r-white/20   px-3 py-2  transition-all duration-300 ease-in-out hover:bg-white/20 hover:backdrop-blur-lg hover:shadow-xl hover:border-white/30 hover:scale-[1.02] transform">Skills</p>
            <p class="bg-white/10 hover:text-black/70 hover:border-x hover:rounded-lg backdrop-blur-sm hover:border-r hover:border-r-white/20   px-3 py-2  transition-all duration-300 ease-in-out hover:bg-white/20 hover:backdrop-blur-lg hover:shadow-xl hover:border-white/30 hover:scale-[1.02] transform">Projects</p>
            <p class="bg-white/10 hover:text-black/70 hover:border-x hover:rounded-lg backdrop-blur-sm hover:border-r hover:border-r-white/20   px-3 py-2  transition-all duration-300 ease-in-out hover:bg-white/20 hover:backdrop-blur-lg hover:shadow-xl hover:border-white/30 hover:scale-[1.02] transform">Experience</p>
            <p class="bg-white/10 hover:text-black/70 backdrop-blur-sm hover:rounded-lg hover:border-l hover:border-r-white/20 hover:rounded-l  px-3 py-2  transition-all duration-300 ease-in-out hover:bg-white/20 hover:backdrop-blur-lg hover:shadow-xl hover:border-white/30 hover:scale-[1.02] transform">Contact</p>
        </div>

        <div className='flex gap-3 '>
           <Navbarbtn/>

            <Navbarbtn btndetail='Hire me' style='w-36 text-center bg-[#8A00FF] rounded-[12px] font-bold  px-8 py-2 '/>
            <Navbarbtn btndetail='Get in Touch' style='bg-black  items-center justify-center  text-[#8A00FF] flex  px-8 py-1.5 rounded-lg whitespace-nowrap' style1=" text-center justify-center  items-center  p-0.5 inline-block rounded-lg bg-gradient-to-r from-[#00D9F5] via-[#8A00FF] to-[#4E4E75] "/>


            
        </div>



      
    </div>
  )
}

export default NavbarPage
