import React, { useState } from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'
import Subherosection from './Subherosection'
import RotatingFlipCard from '../RotatingFlipCard'
import RotatingText from '../RotatingText'
import TiltedCard from '../TiltedCard'


const Herosectionpage = () => {

  return (

    <div className=' md:mx-9 mx-3 md:pt-5 pt-2 text-white h-lvh'>


    <div className='grid md:grid-cols-2'>
        
    <div>

<div className='flex md:gap-3 gap-1 '>
    <Pagebtn btndetail='Full-Stack Developer' style='bg-[#091F26] text-[#00D9F5] md:text-sm md:py-1  px-4 whitespace-nowrap py-1 text-[8px]  rounded-[26843500px] text-center items-center  '/>
    <Pagebtn btndetail='Robotics Engineer' style='bg-[#170927] md:text-sm text-[#8A00FF] px-4 md:py-1 rounded-[26843500px] text-[8px] whitespace-nowrap py-1'  />

  
</div>


<div className='md:text-5xl text-3xl font-bold md:w-2xl w-90  text-zinc-900 '>







<div>
    <div className='  text-white '>
    {/* Full-Stack & Robotics Engineer building intelligent systems where software meets machines. */}

    <div className='flex  items-center text-white'>
        <div className='whitespace-nowrap'>
        "Hi, I'm a
            
        </div>
        {/* <div className=' w-full h-fit whitespace-nowrap '>
            <RotatingFlipCard/>
            
        </div>  */}

<div className='whitespace-nowrap py-0'>
<RotatingText
  texts={[ 'Robotics','Full-Stack ', 'Software']}
  mainClassName=" text-white overflow-hidden px-2  justify-center rounded-lg whitespace-nowrap"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 70, stiffness: 400 }}
  rotationInterval={3000}
/>

</div>


  

    </div>

    <div>
   

    </div>

    
    engineer  creating intelligent systems at the intersection of software and machines."

    </div>


</div>

<div>
    <p className='md:text-xl text-sm md:w-xl md:text-justify md:py-2 text-white'>
    Bridging the gap between software and hardware. Creating innovative solutions that combine web technologies with robotics and automation systems.
    </p>
</div>

{/* <div>
    engineering intelligence
    <p>Coding the Future.</p>
</div> */}


<div className='flex md:text-xl text-sm md:gap-3 gap-1 py-10 '>
    <Pagebtn btndetail='Explore Projects' style='bg-[#8A00FF]/20 text-white rounded-[26843500px] md:py-2 md:px-8 px-4 py-1 ' />
    <Pagebtn img='../../images/HeroSectionImage/downloadframe.png' btndetail='Download CV' style=' flex items-center gap-1 rounded-[26843500px] md:py-2 md:px-8 px-4 py-1 border border-[#00D9F5] text-[#00D9F5] bg-[#E5FBFE]/20'/>
</div>



</div>








</div>



<div className='relative bg-white/20  p-8 rounded-[20px] hidden md:block  '>
    <p className='absolute bg-white size-5 rounded-4xl top-0 left-0 m-3  '></p>
    <p className='absolute bg-white size-5 rounded-4xl top-0 right-0 m-3 '></p>
    <p className='absolute bg-white size-5 rounded-4xl bottom-0 left-0 m-3'></p>
    <p className='absolute bg-white size-5 rounded-4xl bottom-0 right-0 m-3 '></p>
   

<TiltedCard
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="24rem"
  imageWidth="100%"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
      Kendrick Lamar - GNX
    </p>
  }
/>
  
    {/* <img src="../../images/HeroSectionImage/logo.webp" alt="image" className='w-full  h-104 flex items-center justify-center rounded-[20px]' /> */}
</div>

    </div>



    <div>
        <Subherosection/>
    </div>



    </div>
  )
}

export default Herosectionpage
