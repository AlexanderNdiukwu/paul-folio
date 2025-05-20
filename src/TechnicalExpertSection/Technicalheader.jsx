import React from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'


const Technicalheader = () => {
  return (
    <div>
         <div className='grid grid-cols-2 justify-center gap-3 pt-5 text-center '>
               

               <div className='w-fit '>
                <Pagebtn  btndetail='Full-Stack Development' style=' rounded-[26843500px] w-full px-4 text-sm py-1 bg-[#F8F8F8] border whitespace-nowrap border-black/10 hover:bg-gradient-to-r from-[#00D9F5] via-[#456DFA] to-[#8A00FF]'/>

               </div>

               <div className='w-fit '>
                <Pagebtn  btndetail='Robotics & AI' style=' rounded-[26843500px] px-8 py-1 bg-[#F8F8F8] text-sm  border border-black/10 hover:bg-gradient-to-r from-[#00D9F5] via-[#456DFA] to-[#8A00FF]'/>

               </div>
            
                {/* <Pagebtn   btndetail='Backend Development' style='w-24'/> */}





            </div>
      
    </div>
  )
}

export default Technicalheader
