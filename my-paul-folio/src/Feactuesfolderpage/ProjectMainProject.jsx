import React from 'react'
import Projectheader from './Projectheader'
import Projectcard from './Projectcard'
import Technicalexpcard from '../TechnicalExpertSection/Technicalexpertcard/Technicalexpcard'

const ProjectMainProject = () => {
  return (
    <div className='mx-8 bg-black/5'>


        <div className='mx-24'>
            
        <div className='py-6 flex justify-center'>
            <Projectheader />
        </div>

        <div className='grid grid-cols-3 gap-7 py-7'>

        <div className=' w-full h-fit  border rounded-b-2xl pb-3 '>
            <Projectcard imgstyle='object-cover  relative w-full h-60' img='../../images/HeroSectionImage/logo.webp' imgdetails='Autonomous Drone System' imgdescription='Advanced drone control system with computer vision and autonomous navigation capabilities.' />

            <div className='flex gap-3 mx-3 '>
            <Technicalexpcard Carddetails='react' style='py-0.5 px-4 text-sm text-[#00D9F5] rounded-[26843500px] bg-[#DFF5F8]' />
            <Technicalexpcard Carddetails='rot' style='py-0.5 px-4 text-sm text-[#00D9F5] rounded-[26843500px] bg-[#DFF5F8]' />
                
            </div>
        </div>

        <div className=' w-full h-fit border rounded-b-2xl pb-3'>
            <Projectcard imgstyle='object-cover relative w-full h-60' img='../../images/HeroSectionImage/logo.webp' imgdetails='Autonomous Drone System' imgdescription='Advanced drone control system with computer vision and autonomous navigation capabilities.' />
            <div className='flex gap-3 mx-3 '>
            <Technicalexpcard Carddetails='react' style='py-0.5 px-4 text-sm text-[#00D9F5] rounded-[26843500px] bg-[#DFF5F8]' />
            <Technicalexpcard Carddetails='rot' style='py-0.5 px-4 text-sm text-[#00D9F5] rounded-[26843500px] bg-[#DFF5F8]' />
                
            </div>
        </div>

        <div className=' w-full h-fit border rounded-b-2xl pb-3'>
            <Projectcard imgstyle='object-cover relative w-full h-60' img='../../images/HeroSectionImage/logo.webp' imgdetails='Autonomous Drone System' imgdescription='Advanced drone control system with computer vision and autonomous navigation capabilities.' />
            <div className='flex gap-3 mx-3'>
            <Technicalexpcard Carddetails='react' style='py-0.5 px-4 text-sm text-[#00D9F5] rounded-[26843500px] bg-[#DFF5F8]' />
            <Technicalexpcard Carddetails='rot' style='py-0.5 px-4 text-sm text-[#00D9F5] rounded-[26843500px] bg-[#DFF5F8]' />
                
            </div>
        </div>
        
        <div className=' w-full h-fit border rounded-b-2xl pb-3'>
            <Projectcard imgstyle='object-cover relative w-full h-60' img='../../images/HeroSectionImage/logo.webp' imgdetails='Autonomous Drone System' imgdescription='Advanced drone control system with computer vision and autonomous navigation capabilities.' />
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
