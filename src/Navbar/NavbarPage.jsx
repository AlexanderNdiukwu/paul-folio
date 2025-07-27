import React from 'react';
import Navbarbtn from '../Pagebutton/Pagebtn';
import Logo from './Logo';

const NavbarPage = () => {
  return (
    <div className=' backdrop-blur-sm flex items-center  justify-between  rounded-xl md:mx-8 mx-3 py-1 px-2'>
    {/* <div className='bg-[#0A0B0D]/80 backdrop-blur-sm flex items-center  justify-between border border-[#2DD4BF]/20 rounded-xl md:mx-8 mx-3 py-1 px-2'> */}

      <div>
        <Logo />
      </div>


      <div className='hidden md:hidden lg:block rounded-lg'>
        <div className='flex   rounded-lg  text-white'>
        {/* <div className='flex border border-white/5 bg-[#00c2ff]/20  rounded-lg  text-white'> */}
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item, i) => (
            <p
              key={i}
              className={`px-3 py-2 transition-all duration-300 ease-in-out hover:text-[#f02e00]  text-base  hover:scale-105 transform ${
                i === 0 ? 'rounded-l-lg' : i === 4 ? 'rounded-r-lg' : ''
              }`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>


      <div className='hidden md:block'>
        <div className='flex gap-3'>
          <Navbarbtn />

          <Navbarbtn
            btndetail="Let's talk"
            style='w-36 text-center  text-[#00D9F5] border border-[#f02e00] text-black text-sm   rounded-lg bg-[#f02e00] hover:text-[#0A0B0D] transition  font-bold px-6 py-1 rounded-md shadow-md hover:scale-105 transition'
          />

          <Navbarbtn
            btndetail='Get in Touch'
            style='w-36 text-center  text-[#00D9F5] border border-[#f02e00] text-black text-sm   rounded-lg bg-[#f02e00] hover:text-[#0A0B0D] transition  font-bold px-6 py-1 rounded-md shadow-md hover:scale-105 transition'


          />
        </div>
      </div>

      {/* HAMBURGER */}
      <div className='block md:hidden text-[#E0F2FE]'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-6" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
      </div>

    </div>
  );
};

export default NavbarPage;
