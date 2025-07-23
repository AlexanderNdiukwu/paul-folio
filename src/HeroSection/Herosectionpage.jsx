import React, { useState } from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'
import Subherosection from './Subherosection'
import RotatingFlipCard from '../RotatingFlipCard'
import RotatingText from '../RotatingText'
import TiltedCard from '../TiltedCard'
import ScrollingText from '../ScrollingText'


const Herosectionpage = () => {

  return (

    <div className=' md:mx-9 mx-3 md:pt-5 pt-3  text-white h-[90vh] flex flex-col md:justify-between'>



    <div className='grid grid-cols-[700px_1fr] '>
  
      
<div className=' w-full hidden lg:block'>
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
    <p className="   absolute top-15 w-100 left-0 ">
 
{/* <RotatingText
  texts={[ 'hello ','Moi Moi', 'bonjour ']} 
  mainClassName=" text-white overflow-hidden px-9 pb-4 pr-3 h-10   rounded-lg whitespace-nowrap"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 5 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-5   md:pb-1"
  transition={{ type: "spring", damping: 40, stiffness: 500  }}
  rotationInterval={4000}
/>
  */}

    </p>
  }
/>
  
</div>

        
    <div className=' h-[60vh] w-[100vw]  flex flex-col justify-center md:justify-end '>



<div className='md:text-5xl text-3xl font-bold md:w-2xl w-90  text-zinc-900 '>
     <div className='hidden md:block'>
    <div className='flex md:gap-3 gap-1 pb-7 pt-7 '>
    <Pagebtn btndetail='Full-Stack Developer' style='bg-[#091F26]  text-[#00D9F5] border border-[#2DD4BF] text-[#2DD4BF] px-6 py-3 rounded-lg hover:bg-[#2DD4BF] hover:text-[#0A0B0D] transition    md:text-sm md:py-1  px-4 whitespace-nowrap py-1 text-[8px]  rounded-[26843500px] text-center items-center  '/>
    {/* <Pagebtn btndetail='Full-Stack Developer' style='bg-[#091F26] text-[#00D9F5]  text-[#00c2ff]  md:text-sm md:py-1  px-4 whitespace-nowrap py-1 text-[8px]  rounded-[26843500px] text-center items-center  '/> */}
    <Pagebtn btndetail='Robotics Engineer' style=' md:text-sm  border border-[#2DD4BF] text-[#2DD4BF] px-6 py-3 rounded-lg hover:bg-[#2DD4BF] hover:text-[#0A0B0D] transition  px-4 md:py-1 rounded-[26843500px] text-[8px] whitespace-nowrap py-1'  />
  
</div>

     </div>
<div className='block lg:hidden pb-2 relative '>
  <div className='flex'>
  <img src="/images/uploadimg.png" alt="" className='w-30 md:w-80  '/>
  <p className=' text-[10px] absolute right-[20%] top-9 animate-bounce text-[#00c2ff]/80'> 
  
 
<RotatingText
  texts={[ 'Welcome to my space -- get it ? ','maybe i am your next hire ? 👀', 'i think on a different plane ']} 
  mainClassName=" text-[#8A00FF] overflow-hidden px-2 pb-4 pr-3 h-10  justify-center rounded-lg whitespace-nowrap"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 5 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-5   md:pb-1"
  transition={{ type: "spring", damping: 40, stiffness: 500  }}
  rotationInterval={4000}
/>
   </p>

  </div>
</div>






<div>
    <div className='  text-white  '>
    {/* Full-Stack & Robotics Engineer building intelligent systems where software meets machines. */}

    <div className='  items-center text-white hidden md:block'>
           <div className='text-[#00c2ff]'>
           {/* <div className='text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-white'> */}

        "Hi, i am Ndiukwu Chukwuemeka Paul ,I'm a
            
        </div>
        {/* <div className=' w-full h-fit whitespace-nowrap '>
            <RotatingFlipCard/>
            
        </div>  */}

<div className='whitespace-nowrap flex items-center w-2xl  h-15'>
<RotatingText
  texts={[ 'Robotics','Full-Stack', 'Software']} 
  mainClassName="text-white bg-[#00c2ff] overflow-hidden px-2 pb-4 pr-3 h-13 mr-1 justify-center rounded-lg whitespace-nowrap"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 5 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-5   md:pb-1"
  transition={{ type: "spring", damping: 70, stiffness: 400 }}
  rotationInterval={3000}
/>

  <div className='text-[#00c2ff] relative h-full bg-clip-text bg-gradient-to-r from-[#00c2ff] to-white'>
engineer"

  </div>
</div>


  

    </div>
    
    <div className='  items-center  block md:hidden '>
         <div className='text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#00c2ff] to-white'>
          {/* bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent */}


        {/* <div className=' text-2xl text-white'> */}
        "Hi, i am Ndiukwu <br/> Chukwuemeka Paul. 
        <span className='hidden md:block'> a</span>
        
        
        
            
        </div>
        {/* <div className=' w-full h-fit whitespace-nowrap '>
            <RotatingFlipCard/>
            
        </div>  */}

<div className='md:whitespace-nowrap flex items-center lg:w-2xl'>
  <span className='block md:hidden text-[#00c2ff] text-2xl '>i am a</span>
  <div className=''>

<RotatingText
  texts={[ 'Robotics','Full-Stack ', 'Software']} 
  mainClassName=" text-[#8A00FF] text-2xl overflow-hidden px-2 pb-1.5  justify-center rounded-lg whitespace-nowrap"
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
  <div className='text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#00c2ff] to-white'>
  {/* <div className='text-white text-2xl'> */}
engineer"

  </div>
  

</div>

  

    </div>

  <div className=' relative text-[#00c2ff]'>
 
  <ScrollingText text={'Bridging the gap between software and hardware. Creating innovative solutions that combine web technologies with robotics and automation systems.'}
  />

</div>

    <div>
   

    </div>

    
    
     {/* creating intelligent systems at the intersection of software and machines." */}

    </div>


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

<div className=''>

<div className='flex md:text-xl items-center  text-xs md:gap-3 gap-1 pt-7 '>
    <Pagebtn btndetail='Explore Projects' style=' text-black border border-[#2DD4BF] text-[#2DD4BF] px-6 py-3 rounded-lg bg-[#2DD4BF] hover:text-[#0A0B0D] transition  rounded-[26843500px] md:py-2 md:px-8 px-4 py-1.5  ' />
    <Pagebtn img='../../images/HeroSectionImage/downloadframe.png' btndetail='Download CV' style=' '/>
    {/* <Pagebtn img='../../images/HeroSectionImage/downloadframe.png' btndetail='Download CV' style='   border border-[#2DD4BF]  px-6 py-3 rounded-lg bg-[#2DD4BF] hover:text-[#0A0B0D] transition flex items-center gap-1 rounded-[26843500px] md:py-2 md:px-8 px-4 py-1 border border-[#00D9F5] text-black'/> */}
</div>
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
