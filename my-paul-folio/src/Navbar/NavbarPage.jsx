import React from 'react'
import Navbarbtn from '../Pagebutton/Pagebtn'
import Logo from './Logo'

const NavbarPage = () => {
  return (
    <div className=' backdrop-blur-xs flex items-center border-b border-[#1E1E22]/70 justify-between md:mx-9 mx-3 py-1 '>

        <div >
        <Logo/>
        </div>

        <div className='hidden md:block'>
        <div className='flex border border-black/20 rounded-md bg-white/20  backdrop-blur-sm shadow-2xs  '>
            <p className="bg-white/10 hover:text-black/70 backdrop-blur-sm hover:border-r hover:border-r-white/5 hover:rounded-r  px-3 py-2  transition-all duration-300 ease-in-out hover:bg-white/20 hover:backdrop-blur-lg hover:shadow-xl hover:border-white/30 hover:scale-[1.02] transform">About</p>
            <p className="bg-white/10 hover:text-black/70 hover:border-x hover:rounded-lg backdrop-blur-sm hover:border-r hover:border-r-white/20   px-3 py-2  transition-all duration-300 ease-in-out hover:bg-white/20 hover:backdrop-blur-lg hover:shadow-xl hover:border-white/30 hover:scale-[1.02] transform">Skills</p>
            <p className="bg-white/10 hover:text-black/70 hover:border-x hover:rounded-lg backdrop-blur-sm hover:border-r hover:border-r-white/20   px-3 py-2  transition-all duration-300 ease-in-out hover:bg-white/20 hover:backdrop-blur-lg hover:shadow-xl hover:border-white/30 hover:scale-[1.02] transform">Projects</p>
            <p className="bg-white/10 hover:text-black/70 hover:border-x hover:rounded-lg backdrop-blur-sm hover:border-r hover:border-r-white/20   px-3 py-2  transition-all duration-300 ease-in-out hover:bg-white/20 hover:backdrop-blur-lg hover:shadow-xl hover:border-white/30 hover:scale-[1.02] transform">Experience</p>
            <p className="bg-white/10 hover:text-black/70 backdrop-blur-sm hover:rounded-lg hover:border-l hover:border-r-white/20 hover:rounded-l  px-3 py-2  transition-all duration-300 ease-in-out hover:bg-white/20 hover:backdrop-blur-lg hover:shadow-xl hover:border-white/30 hover:scale-[1.02] transform">Contact</p>
        </div>

        </div>

<div className='hidden md:block'>
        <div className='flex gap-3  '>
           <Navbarbtn/>

            <Navbarbtn btndetail='Hire me' style='w-36 text-center bg-[#8A00FF] rounded-[12px] font-bold  px-8 py-2 '/>
            <Navbarbtn btndetail='Get in Touch' style='bg-black  items-center justify-center  text-[#8A00FF] flex  px-8 py-1.5 rounded-lg whitespace-nowrap' style1=" text-center justify-center  items-center  p-0.5 inline-block rounded-lg bg-gradient-to-r from-[#00D9F5] via-[#8A00FF] to-[#4E4E75] "/>


            
        </div>

</div>

<div className='block md:hidden'>
  <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
</svg>
</p>
</div>



      
    </div>
  )
}

export default NavbarPage
