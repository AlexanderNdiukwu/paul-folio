import React from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'


const Technicalheader = () => {
  return (
    <div>
         <div className='flex gap-3 py-5  '>
            
                <Pagebtn  btndetail='Full-Stack Development' style=' rounded-[26843500px] w-full px-2 text-sm py-1 bg-[#F8F8F8] border border-black/10 hover:bg-gradient-to-r from-[#00D9F5] via-[#456DFA] to-[#8A00FF]'/>
                {/* <Pagebtn   btndetail='Backend Development' style='w-24'/> */}
                <Pagebtn  btndetail='Robotics & AI' style=' rounded-[26843500px] px-2 py-1 bg-[#F8F8F8] text-sm  border border-black/10 hover:bg-gradient-to-r from-[#00D9F5] via-[#456DFA] to-[#8A00FF]'/>





            </div>
      
    </div>
  )
}

export default Technicalheader
