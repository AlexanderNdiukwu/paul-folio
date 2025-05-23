import React, { useState } from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'
import Subherosection from './Subherosection'
import RotatingFlipCard from '../RotatingFlipCard'


const Herosectionpage = () => {

  return (

    <div className=' md:mx-9 mx-3 md:pt-5 pt-2 '>


    <div className='grid md:grid-cols-2'>
        
    <div>

<div className='flex md:gap-3 gap-1 '>
    <Pagebtn btndetail='Full-Stack Developer' style='bg-[#091F26] text-[#00D9F5] md:text-sm md:py-1  px-4 whitespace-nowrap py-1 text-[8px]  rounded-[26843500px] text-center items-center  '/>
    <Pagebtn btndetail='Robotics Engineer' style='bg-[#170927] md:text-sm text-[#8A00FF] px-4 md:py-1 rounded-[26843500px] text-[8px] whitespace-nowrap py-1'  />

  
</div>


<div className='md:text-5xl text-3xl font-bold md:w-2xl w-90  text-zinc-900 '>







<div>
    <div className='   '>
    {/* Full-Stack & Robotics Engineer building intelligent systems where software meets machines. */}

    <div className='flex  items-center'>
        <div className='whitespace-nowrap'>
        "Hi, I'm a
            
        </div>
        <div className=' w-full h-fit whitespace-nowrap '>
            <RotatingFlipCard/>
            
        </div> 

    </div>

    
     creating intelligent systems at the intersection of software and machines."

    </div>


</div>

<div>
    <p className='md:text-xl text-sm md:w-xl md:text-justify md:py-2 text-black/50'>
    Bridging the gap between software and hardware. Creating innovative solutions that combine web technologies with robotics and automation systems.
    </p>
</div>

{/* <div>
    engineering intelligence
    <p>Coding the Future.</p>
</div> */}


<div className='flex md:text-xl text-sm md:gap-3 gap-1 py-3 '>
    <Pagebtn btndetail='Explore Projects' style='bg-[#8A00FF] rounded-[26843500px] md:py-2 md:px-8 px-4 py-1 ' />
    <Pagebtn img='../../images/HeroSectionImage/downloadframe.png' btndetail='Download CV' style=' flex items-center gap-1 rounded-[26843500px] md:py-2 md:px-8 px-4 py-1 border border-[#00D9F5] text-[#00D9F5] bg-[#E5FBFE]'/>
</div>
</div>








</div>



<div className='relative bg-black/5  p-8 rounded-[20px] hidden md:block  '>
    <p className='absolute bg-white size-5 rounded-4xl top-0 left-0 m-3  '></p>
    <p className='absolute bg-white size-5 rounded-4xl top-0 right-0 m-3 '></p>
    <p className='absolute bg-white size-5 rounded-4xl bottom-0 left-0 m-3'></p>
    <p className='absolute bg-white size-5 rounded-4xl bottom-0 right-0 m-3'></p>
    <img src="../../images/HeroSectionImage/logo.webp" alt="image" className='w-full  h-104 flex items-center justify-center rounded-[20px]' />
</div>

    </div>



    <div>
        <Subherosection/>
    </div>



    </div>
  )
}

export default Herosectionpage
