import React from 'react';
import Navbarbtn from '../Pagebutton/Pagebtn';
import Logo from './Logo';
// import { Link } from 'react-router-dom'


const NavbarPage = () => {
  return (
    <div className=' backdrop-blur-sm flex items-center  justify-between border border-white/10 lg:border-0  rounded-xl md:mx-8 mx-3 py-2 px-2'>
    {/* <div className='bg-[#0A0B0D]/80 backdrop-blur-sm flex items-center  justify-between border border-[#2DD4BF]/20 rounded-xl md:mx-8 mx-3 py-1 px-2'> */}

      <div>
        <Logo />
      </div>


      <div className='hidden md:hidden lg:block rounded-lg'>
        <div className='flex   rounded-lg  text-white'>
        {/* <div className='flex border border-white/5 bg-[#00c2ff]/20  rounded-lg  text-white'> */}
          {["Home","About", "Skills", "Projects", "Experience"].map((item, i) => (
            <p
            
              key={i}
              className={`px-3 py-2 transition-all duration-300 ease-in-out hover:text-[#f02e00]  text-base  hover:scale-105 transform ${
                i === 0 ? 'rounded-l-lg' : i === 4 ? 'rounded-r-lg' : ''
              } ${item == "Home" ? 'text-[#f02e00]':''} `}
            >
            {item}  
             {/* <Link>{item}</Link>  */}
            </p>
          ))}
        </div>
      </div>


      <div className=' '>
        <div className='flex gap-3'>
         
          <div className='hidden md:block'>
          <Navbarbtn
            btndetail2="Download CV"
            btndetail={   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="md:w-5 w-2 text-center animate-bounce  text-black font-extrabold ">
  <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
</svg>}
            // btndetail="Let's talk"
            parent={'flex px-4 gap-1 py-0.5'}
            btndetail2sty={'whitespace-nowrap'}
            btndetailsty={'whitespace-nowrap'}
            style='w-38 text-center  border border-[#f02e00]/20  text-black text-sm   rounded-lg bg-[#f02e00] hover:text-[#0A0B0D] transition  font-bold  py-1 rounded-md shadow-md hover:scale-105 transition'
            // style='w-38 text-center  border border-[#f02e00]/20  text-black text-sm   rounded-lg bg-gradient-to-r from-[#f02e00]/30 via-[#f02e00]  to-[#f02e00]/30 hover:text-[#0A0B0D] transition  font-bold  py-1 rounded-md shadow-md hover:scale-105 transition'
          />

          </div>
       

          <div className=''>

          <Navbarbtn
            btndetail='Get in Touch'
            parent={'md:py-0.5'}
            style='md:w-38 w-22 text-center  border border-[#f02e00]/20 text-black md:text-sm text-[10px] font-bold  rounded-lg bg-[#f02e00] hover:text-[#0A0B0D] transition  font-bold md:px-6 py-1 rounded-md shadow-md hover:scale-105 transition'
            // style='md:w-38 w-22 text-center  border border-[#f02e00]/20 text-black md:text-sm text-[9px]  rounded-lg bg-gradient-to-r from-[#f02e00]/30 via-[#f02e00]  to-[#f02e00]/30 hover:text-[#0A0B0D] transition  font-bold md:px-6 py-1 rounded-md shadow-md hover:scale-105 transition'


          />
          </div>
        </div>
      </div>

      {/* HAMBURGER */}
      {/* <div className='block md:hidden text-[#E0F2FE]'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="size-6" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
      </div> */}

    </div>
  );
};

export default NavbarPage;
