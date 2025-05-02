import React from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'
import Technicalheader from './Technicalheader'
import Technicalexpcard from './Technicalexpertcard/Technicalexpcard'
import BarStatus from './Technicalexpertcard/BarStatus'

const Technicalpage = () => {
  return (
    <div>
        <div className='border '>

            <div>
                <p>Expertise Areas</p>
            </div >
            <div>
                <Technicalheader/>
            </div>


            <div className='bg-[#48484C] pt-8 px-8 w-full'>
            <div className='text-[#00D9F5] '>

                <Technicalexpcard Carddetails='fullstack' />
            </div>


                <BarStatus Listofskills='react' statusPercentage='98%'  />
            <div>
                <BarStatus Listofskills='react' statusPercentage='98%'  />
            </div> 
          

            </div>

           





        </div>
      
    </div>
  )
}

export default Technicalpage
