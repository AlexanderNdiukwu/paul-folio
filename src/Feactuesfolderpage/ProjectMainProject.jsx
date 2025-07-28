import React from 'react'
import Projectheader from './Projectheader'
import Projectcard from './Projectcard'
import Technicalexpcard from '../TechnicalExpertSection/Technicalexpertcard/Technicalexpcard'
import ScrollingText from '../ScrollingText'

const ProjectMainProject = () => {
  return (
    <div className='md:mx-8 mx-3  rounded-lg'>


        <div className='lg:mx-27 mx-8  '>
            
        <div className='pb-5 py-6 flex text-white/40  justify-center'>
            <Projectheader />
        </div>

        <div className='md:grid flex flex-col lg:grid-cols-4 md:grid-cols-2 lg:gap-7 gap-5 py-5 text-white/50 '>

        <div className=' w-full h-fit   shadow-lg shadow-[#00c2ff] rounded-2xl pb-3   '>
            <Projectcard imgstyle='object-cover  relative w-full rounded-t-2xl md:h-49 h-40' img='../../images/HeroSectionImage/logo.webp'  imgdetails='Autonomous Drone System' imgdescription='Advanced drone control system with computer vision and autonomous navigation capabilities.' />

            <div className='flex md:gap-3 gap-1 mx-3 relative '>
                 <div className='border-r-2 h-9 w-2 border-white/5 absolute right-0 bottom-1 animate-pulse '>

                </div>
            <ScrollingText text={<Technicalexpcard img={[{image:'/images/facebook.png',imgdet:'facebook'} ,{image:'/images/instagram.png',imgdet:'inst'} ,]} />}/>
            <div className='border-l h-9 w-4 border-white/20 absolute left-0 bottom-0.5 animate-pulse '>

            </div>
            </div>
        </div>


         <div className=' w-full h-fit   shadow-lg shadow-[#00c2ff] rounded-2xl pb-3   '>
            <Projectcard imgstyle='object-cover  relative w-full rounded-t-2xl md:h-49 h-40' img='../../images/HeroSectionImage/logo.webp'  imgdetails='Autonomous Drone System' imgdescription='Advanced drone control system with computer vision and autonomous navigation capabilities.' />

            <div className='flex md:gap-3 gap-1 mx-3 relative '>
                 <div className='border-r-2 h-9 w-2 border-white/5 absolute right-0 bottom-1 animate-pulse '>

                </div>
            <ScrollingText text={<Technicalexpcard img={[{image:'/images/facebook.png',imgdet:'facebook'} ,{image:'/images/instagram.png',imgdet:'inst'} ,]} />}/>
            <div className='border-l h-9 w-4 border-white/20 absolute left-0 bottom-0.5 animate-pulse '>

            </div>
            </div>
        </div>

         <div className=' w-full h-fit   shadow-lg shadow-[#00c2ff] rounded-2xl pb-3   '>
            <Projectcard imgstyle='object-cover  relative w-full rounded-t-2xl md:h-49 h-40' img='../../images/HeroSectionImage/logo.webp'  imgdetails='Autonomous Drone System' imgdescription='Advanced drone control system with computer vision and autonomous navigation capabilities.' />

            <div className='flex md:gap-3 gap-1 mx-3 relative '>
                 <div className='border-r-2 h-9 w-2 border-white/5 absolute right-0 bottom-1 animate-pulse '>

                </div>
            <ScrollingText text={<Technicalexpcard img={[{image:'/images/facebook.png',imgdet:'facebook'} ,{image:'/images/instagram.png',imgdet:'inst'} ,]} />}/>
            <div className='border-l h-9 w-4 border-white/20 absolute left-0 bottom-0.5 animate-pulse '>

            </div>
            </div>
        </div>
        
         <div className=' w-full h-fit   shadow-lg shadow-[#00c2ff] rounded-2xl pb-3   '>
            <Projectcard imgstyle='object-cover  relative w-full rounded-t-2xl md:h-49 h-40' img='../../images/HeroSectionImage/logo.webp'  imgdetails='Autonomous Drone System' imgdescription='Advanced drone control system with computer vision and autonomous navigation capabilities.' />

            <div className='flex md:gap-3 gap-1 mx-3 relative '>
                 <div className='border-r-2 h-9 w-2 border-white/5 absolute right-0 bottom-1 animate-pulse '>

                </div>
            <ScrollingText text={<Technicalexpcard img={[{image:'/images/facebook.png',imgdet:'facebook'} ,{image:'/images/instagram.png',imgdet:'inst'} ,]} />}/>
            <div className='border-l h-9 w-4 border-white/20 absolute left-0 bottom-0.5 animate-pulse '>

            </div>
            </div>
        </div>








        </div>
       

        </div>

        
      <div  className='text-white flex justify-center-safe text-center py-8 '>

      <p  className='hover:text-white text-xs border border-[#f02e00]/20  bg-gradient-to-r from-[#f02e00]/20 via-[#f02e00] to-[#f02e00]/20 py-3 px-6 rounded-2xl text-black'>More Projects </p>
      {/* <p onClick={()=>send('skill')} className='hover:text-white border border-[#00c2ff]/20 bg-gradient-to-r from-transparent via-[#00c2ff]/50 to-transparent py-3 px-6 rounded-2xl text-black'>More Skills </p> */}
     </div>



      
    </div>
  )
}

export default ProjectMainProject
