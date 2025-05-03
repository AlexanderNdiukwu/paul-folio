import React from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'


const Technicalheader = () => {
  return (
    <div>
         <div className='flex gap-3 py-3 '>
            
                <Pagebtn  btndetail='Full-Stack Development' style=' rounded-[26843500px] px-7 py-3 bg-[#F8F8F8]'/>
                {/* <Pagebtn   btndetail='Backend Development' style='w-24'/> */}
                <Pagebtn  btndetail='Robotics & AI' style=' rounded-[26843500px] px-7 py-3 bg-[#F8F8F8] '/>
            </div>
      
    </div>
  )
}

export default Technicalheader
