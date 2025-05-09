import React from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'
import Technicalheader from './Technicalheader'
import Technicalexpcard from './Technicalexpertcard/Technicalexpcard'
import BarStatus from './Technicalexpertcard/BarStatus'

const Technicalpage = () => {
  return (
    <div>
        <div className=' mx-8 py-4 '>

            <div className='bg-black/5 pb-10'>

                
            <div className='text-4xl font-bold text-[#E5E5E5] flex justify-center py-2'>
                <p>Expertise Areas</p>
            </div >

            <div className='mx-24'>

            <div className=' py-6 grid justify-center '>
                <Technicalheader/>

                <div className='flex justify-center gap-2'>
                    <p className='size-2 bg-blue-800 rounded-full'></p>
                    <p className='size-2 bg-black/45 rounded-full'></p>
                </div>
            </div>

            

            <div className='flex gap-10'>


            <div className='bg-[#F8F8F8] border border-black/20 rounded-3xl  pt-8  px-8 w-full '>
            <div className='text-[#00D9F5] '>

                <Technicalexpcard Carddetails='Full-Stack Development' style='text-3xl py-2 font-bold'/>
            </div>



            <div className='py-6'>
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


            <div className='bg-[#F8F8F8] pt-8 px-8 w-full border rounded-3xl border-black/20'>
            <div className='text-[#00D9F5] '>

                <Technicalexpcard Carddetails='Backend Development' style='text-3xl py-2 font-bold' />
            </div>


           
            <div className='py-6'>
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
