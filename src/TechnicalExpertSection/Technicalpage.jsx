import React from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'
import Technicalheader from './Technicalheader'
import Technicalexpcard from './Technicalexpertcard/Technicalexpcard'
import BarStatus from './Technicalexpertcard/BarStatus'

const Technicalpage = () => {
  return (
    <div>
        <div className=' md:mx-8 mx-3 py-4 '>

            <div className='bg-black/5 pb-10 rounded-lg'>

                
            <div className='text-4xl font-bold text-black/25 flex justify-center py-2'>
                <p className='underline '>Expertise Areas</p>
                  
            </div >

            <div className='grid justify-center'>
                <Technicalheader/>

            </div>

            <div className='md:mx-30 mx-8'>

            <div className=' md:py-8 py-3 grid justify-center '>

                <div className='flex justify-center gap-2'>
                    <p className='size-2 bg-blue-800 rounded-full'></p>
                    <p className='size-2 bg-black/45 rounded-full'></p>
                </div>
            </div>

            

            <div className='md:flex grid md:gap-10 gap-3'>


            <div className='bg-[#F8F8F8]/30 border border-black/20 rounded-3xl pb-7  md:pt-8 pt-4 md:px-8 w-full '>
            <div className='text-[#00D9F5] '>

                <Technicalexpcard Carddetails='Full-Stack Development' style='md:text-3xl text-2xl py-2 px-1 font-bold'/>
            </div>



            <div className='md:py-6 py-3'>
            <div>
                <BarStatus Listofskills='Frontend (React, Vue, Next.js)' statusPercentage='98%'  />

            </div>

            <div>
                <BarStatus Listofskills='react' statusPercentage='98%'  />
            </div> 
              <div>
                <BarStatus Listofskills='react' statusPercentage='98%'  />
            </div>

            </div>

            </div>


            <div className='bg-[#F8F8F8]/30 md:pt-8 pt-4 md:px-8 w-full pb-8 border rounded-3xl border-black/20 '>
            <div className='text-[#00D9F5]  '>

                <Technicalexpcard Carddetails='Backend Development' style='md:text-3xl text-2xl py-2 px-1 font-bold' />
            </div>


           
            <div className='md:py-6 py-3'>
            <div>
                <BarStatus Listofskills='Frontend (React, Vue, Next.js)' statusPercentage='98%'  />

            </div>

            <div>
                <BarStatus Listofskills='react' statusPercentage='98%'  />
            </div> 
              <div>
                <BarStatus Listofskills='react' statusPercentage='98%'  />
            </div>

            </div>

            </div>





            </div>





            </div>
    
          

            </div>

           





        </div>
      
    </div>
  )
}

export default Technicalpage
