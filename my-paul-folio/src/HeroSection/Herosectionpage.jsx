import React, { useState } from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'


const Herosectionpage = () => {

  return (
    <div className='grid grid-cols-2'>



        <div>

            <div className='flex gap-3 py-4'>
                <Pagebtn btndetail='Full-Stack Developer' style='bg-[#091F26] text-[#00D9F5] text-sm py-3 px-4 rounded-[26843500px]  '/>
                <Pagebtn btndetail='Robotics Engineer' style='bg-[#170927] text-sm text-[#8A00FF] px-4 py-3 rounded-[26843500px]'  />

              
            </div>


            <div className='text-5xl font-bold w-2xl  text-zinc-900 max-sm:text-4xl'>







            <div>
                <p className=' '>
                Full-Stack & Robotics Engineer building intelligent systems where software meets machines.

                </p>


            </div>

            <div>
                <p className='text-2xl w-xl text-justify '>
                Bridging the gap between software and hardware. Creating innovative solutions that combine web technologies with robotics and automation systems.
                </p>
            </div>

            {/* <div>
                engineering intelligence
                <p>Coding the Future.</p>
            </div> */}


            <div className='flex text-xl gap-3 py-3'>
                <Pagebtn btndetail='Explore Projects' style='bg-[#8A00FF] rounded-[26843500px] py-2 px-8 ' />
                <Pagebtn img='../../images/HeroSectionImage/downloadframe.png' btndetail='Download CV' style=' flex items-center gap-1 rounded-[26843500px] py-2 px-8 border border-[#00D9F5] text-[#00D9F5] bg-[#E5FBFE]'/>
            </div>
            </div>




          
          
        </div>

        
       
            <div className='relative bg-black/5  p-6 rounded-[20px]  '>
                <p className='absolute bg-white size-5 rounded-4xl top-0 left-0 m-2  '></p>
                <p className='absolute bg-white size-5 rounded-4xl top-0 right-0 m-2 '></p>
                <p className='absolute bg-white size-5 rounded-4xl bottom-0 left-0 m-2'></p>
                <p className='absolute bg-white size-5 rounded-4xl bottom-0 right-0 m-2'></p>
                <img src="../../images/HeroSectionImage/logo.webp" alt="image" className='w-full h-104 rounded-[20px]' />
            </div>
    </div>
  )
}

export default Herosectionpage
