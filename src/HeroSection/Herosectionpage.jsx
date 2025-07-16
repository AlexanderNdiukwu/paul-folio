import React, { useState } from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'
import Subherosection from './Subherosection'
import RotatingFlipCard from '../RotatingFlipCard'
import RotatingText from '../RotatingText'
import TiltedCard from '../TiltedCard'
import ScrollingText from '../ScrollingText'


const Herosectionpage = () => {

  return (

    <div className=' md:mx-9 mx-3 md:pt-5 pt-3 text-white h-[90vh] flex flex-col md:justify-between'>



    <div className='grid grid-cols-[700px_1fr] '>
  
      
<div className=' w-full hidden md:block'>
    {/* <p className='absolute bg-white size-5 rounded-4xl top-0 left-0 m-3  '></p>
    <p className='absolute bg-white size-5 rounded-4xl top-0 right-0 m-3 '></p>
    <p className='absolute bg-white size-5 rounded-4xl bottom-0 left-0 m-3'></p>
    <p className='absolute bg-white size-5 rounded-4xl bottom-0 right-0 m-3 '></p> */}

   

<TiltedCard
  imageSrc="/images/uploadimg.png "
  altText="Ndiukwu chukwuemeka Paul"
  captionText="Ndiukwu Chukwuemeka Paul "
  containerHeight="100%"
  containerWidth="90%"
  imageHeight="100%"
  imageWidth="100%"
  rotateAmplitude={12}
  scaleOnHover={1.1}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
     {/* <div className='flex md:gap-3 gap-1 pb-4 '>
    <Pagebtn btndetail='Full-Stack Developer' style='bg-[#091F26] text-[#00D9F5] md:text-sm md:py-1  px-4 whitespace-nowrap py-1 text-[8px]  rounded-[26843500px] text-center items-center  '/>
    <Pagebtn btndetail='Robotics Engineer' style='bg-[#170927] md:text-sm text-[#8A00FF] px-4 md:py-1 rounded-[26843500px] text-[8px] whitespace-nowrap py-1'  />

  
</div> */}


    </p>
  }
/>
  
</div>

        
    <div className=' h-[60vh] w-[100vw]  flex flex-col justify-center md:justify-end '>



<div className='md:text-5xl text-3xl font-bold md:w-2xl w-90   text-zinc-900 '>

    <div className='flex md:gap-3 gap-1 pb-7 pt-7'>
    <Pagebtn btndetail='Full-Stack Developer' style='bg-[#091F26] text-[#00D9F5] animate-pulse   md:text-sm md:py-1  px-4 whitespace-nowrap py-1 text-[8px]  rounded-[26843500px] text-center items-center  '/>
    <Pagebtn btndetail='Robotics Engineer' style='bg-[#170927] md:text-sm text-[#8A00FF] animate-pulse px-4 md:py-1 rounded-[26843500px] text-[8px] whitespace-nowrap py-1'  />
  
</div>
<div className='block md:hidden pb-2 relative '>
  <div className='flex'>
  <img src="/images/uploadimg.png" alt="" className='w-40  '/>
  <p className='text-white text-xs absolute right-[26%] top-13 animate-bounce'> maybe your next hire ? </p>

  </div>
</div>






<div>
    <div className='  text-white  '>
    {/* Full-Stack & Robotics Engineer building intelligent systems where software meets machines. */}

    <div className='  items-center text-white hidden md:block'>
        <div className=''>
        "Hi, i am Ndiukwu Chukwuemeka Paul ,I'm a
            
        </div>
        {/* <div className=' w-full h-fit whitespace-nowrap '>
            <RotatingFlipCard/>
            
        </div>  */}

<div className='whitespace-nowrap flex items-center w-2xl'>
<RotatingText
  texts={[ 'Robotics','Full-Stack', 'Software']} 
  mainClassName=" text-white overflow-hidden px-2   justify-center rounded-lg whitespace-nowrap"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 5 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-5   md:pb-1"
  transition={{ type: "spring", damping: 70, stiffness: 400 }}
  rotationInterval={3000}
/>
engineer"

</div>


  

    </div>
    
    <div className='  items-center text-white block md:hidden '>
        <div className=''>
        "Hi, i am Ndiukwu Chukwuemeka Paul ,I'm  
        <span className='hidden md:block'> a</span>
        
        
        
            
        </div>
        {/* <div className=' w-full h-fit whitespace-nowrap '>
            <RotatingFlipCard/>
            
        </div>  */}

<div className='md:whitespace-nowrap flex items-center lg:w-2xl'>
  <span className='block md:hidden'>a</span>
  <div className=''>

<RotatingText
  texts={[ 'Robotics','Full-Stack ', 'Software']} 
  mainClassName=" text-white overflow-hidden px-2 pb-1.5  justify-center rounded-lg whitespace-nowrap"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 5 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 70, stiffness: 400 }}
  rotationInterval={3000}
/>
  </div>
engineer"

</div>


  

    </div>


    <div>
   

    </div>

    
    
     {/* creating intelligent systems at the intersection of software and machines." */}

    </div>


</div>

<div>
  <ScrollingText text={'Bridging the gap between software and hardware. Creating innovative solutions that combine web technologies with robotics and automation systems.'}
  />
</div>

{/* <div>
    <p className='md:text-xl text-sm md:w-xl md:text-justify md:py-2 text-white'>
    Bridging the gap between software and hardware. Creating innovative solutions that combine web technologies with robotics and automation systems.
    </p>
</div> */}

{/* <div>
    engineering intelligence
    <p>Coding the Future.</p>
</div> */}


<div className='flex md:text-xl text-xs md:gap-3 gap-1 pt-7 '>
    <Pagebtn btndetail='Explore Projects' style='bg-[#8A00FF]/20 text-white rounded-[26843500px] md:py-2 md:px-8 px-4 py-1 ' />
    <Pagebtn img='../../images/HeroSectionImage/downloadframe.png' btndetail='Download CV' style=' flex items-center gap-1 rounded-[26843500px] md:py-2 md:px-8 px-4 py-1 border border-[#00D9F5] text-[#00D9F5] bg-[#E5FBFE]/20'/>
</div>



</div>








</div>



    </div>



    <div className=''>
        <Subherosection/>
    </div>



    </div>
  )
}

export default Herosectionpage
