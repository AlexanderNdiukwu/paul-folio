import React from 'react'
import Projectheader from './Projectheader'
import Projectcard from './Projectcard'
import Technicalexpcard from '../TechnicalExpertSection/Technicalexpertcard/Technicalexpcard'

const ProjectMainProject = () => {
  return (
    <div className='md:mx-8 mx-3 bg-white/5 rounded-lg'>


        <div className='md:mx-30 mx-8 '>
            
        <div className='pb-5 py-6 flex text-white/40  justify-center'>
            <Projectheader />
        </div>

        <div className='grid md:grid-cols-3 md:gap-10 gap-5 py-5 '>

        <div className=' w-full h-fit  border rounded-2xl pb-3 bg-white/20 '>
            <Projectcard imgstyle='object-cover  relative w-full rounded-t-2xl h-50' img='../../images/HeroSectionImage/logo.webp' imgdetails='Autonomous Drone System' imgdescription='Advanced drone control system with computer vision and autonomous navigation capabilities.' />

            <div className='flex md:gap-3 gap-1 mx-3 '>
            <Technicalexpcard Carddetails='react' style='py-0.5 px-4 text-sm text-[#00D9F5] rounded-[26843500px] bg-[#DFF5F8]' />
            <Technicalexpcard Carddetails='rot' style='py-0.5 px-4 text-sm text-[#00D9F5] rounded-[26843500px] bg-[#DFF5F8]' />
                
            </div>
        </div>

        <div className=' w-full h-fit border rounded-2xl pb-3 bg-white/20'>
            <Projectcard imgstyle='object-cover relative w-full rounded-t-2xl h-50' img='../../images/HeroSectionImage/logo.webp' imgdetails='Autonomous Drone System' imgdescription='Advanced drone control system with computer vision and autonomous navigation capabilities.' />
            <div className='flex gap-3 mx-3 '>
            <Technicalexpcard Carddetails='react' style='py-0.5 px-4 text-sm text-[#00D9F5] rounded-[26843500px] bg-[#DFF5F8]' />
            <Technicalexpcard Carddetails='rot' style='py-0.5 px-4 text-sm text-[#00D9F5] rounded-[26843500px] bg-[#DFF5F8]' />
                
            </div>
        </div>

        <div className=' w-full h-fit border rounded-2xl pb-3 bg-white/20'>
            <Projectcard imgstyle='object-cover relative w-full h-50 rounded-t-2xl' img='../../images/HeroSectionImage/logo.webp' imgdetails='Autonomous Drone System' imgdescription='Advanced drone control system with computer vision and autonomous navigation capabilities.' />
            <div className='flex gap-3 mx-3'>
            <Technicalexpcard Carddetails='react' style='py-0.5 px-4 text-sm text-[#00D9F5] rounded-[26843500px] bg-[#DFF5F8]' />
            <Technicalexpcard Carddetails='rot' style='py-0.5 px-4 text-sm text-[#00D9F5] rounded-[26843500px] bg-[#DFF5F8]' />
                
            </div>
        </div>
        
        <div className=' w-full h-fit border rounded-2xl pb-3 bg-white/20'>
            <Projectcard imgstyle='object-cover relative w-full h-50 rounded-t-2xl' img='../../images/HeroSectionImage/logo.webp' imgdetails='Autonomous Drone System' imgdescription='Advanced drone control system with computer vision and autonomous navigation capabilities.' />
            <div className='flex gap-3 mx-3'>
            <Technicalexpcard Carddetails='react' style='py-0.5 px-4 text-sm text-[#00D9F5] rounded-[26843500px] bg-[#DFF5F8]' />
            <Technicalexpcard Carddetails='rot' style='py-0.5 px-4 text-sm text-[#00D9F5] rounded-[26843500px] bg-[#DFF5F8]' />
                
            </div>
        </div>


        </div>
       

        </div>



      
    </div>
  )
}

export default ProjectMainProject
