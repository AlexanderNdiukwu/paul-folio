import React from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'
import Technicalheader from './Technicalheader'
import Technicalexpcard from './Technicalexpertcard/Technicalexpcard'
import BarStatus from './Technicalexpertcard/BarStatus'

const Technicalpage = () => {
  return (
    <div>
        <div className=' '>

            <div className='text-4xl font-bold text-[#E5E5E5] flex justify-center'>
                <p>Expertise Areas</p>
            </div >
            <div>
                <Technicalheader/>
            </div>

            

            <div className='flex gap-4'>


            <div className='bg-[#F8F8F8] pt-8 px-8 w-full shadow-2xl'>
            <div className='text-[#00D9F5] '>

                <Technicalexpcard Carddetails='Full-Stack Development' style='text-2xl font-bold'/>
            </div>


                <BarStatus Listofskills='Frontend (React, Vue, Next.js)' statusPercentage='98%'  />
            <div>
                <BarStatus Listofskills='react' statusPercentage='98%'  />
            </div> 
              <div>
                <BarStatus Listofskills='react' statusPercentage='98%'  />
            </div>

            </div>


            <div className='bg-[#F8F8F8] pt-8 px-8 w-full shadow-2xl'>
            <div className='text-[#00D9F5] '>

                <Technicalexpcard Carddetails='Backend Development' style='text-2xl font-bold' />
            </div>


                <BarStatus Listofskills='Frontend (React, Vue, Next.js)' statusPercentage='98%'  />
            {/* <div>
                <BarStatus Listofskills='react' statusPercentage='98%'  />
            </div> 
              <div>
                <BarStatus Listofskills='react' statusPercentage='98%'  />
            </div> */}

            </div>





            </div>


          
           





        </div>
      
    </div>
  )
}

export default Technicalpage
