import React from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'


const Technicalheader = () => {
  return (
    <div>
         <div className='grid grid-cols-2 justify-center md:gap-3 gap-2 pt-5 text-center  '>
               

               <div className='w-full   '>
                <Pagebtn  btndetail='Full-Stack Development' style=' rounded-[26843500px] w-full md:px-4 px-2 md:text-sm text-xs py-1 bg-[#F8F8F8] border whitespace-nowrap border-black/10 hover:bg-gradient-to-r from-[#00D9F5] via-[#456DFA] to-[#8A00FF]'/>

               </div>

               <div className='w-full '>
                <Pagebtn  btndetail='Robotics & AI' style=' rounded-[26843500px] md:px-8 px-4 py-1 bg-[#F8F8F8] md:text-sm text-xs  border border-black/10 hover:bg-gradient-to-r from-[#00D9F5] via-[#456DFA] to-[#8A00FF]'/>

               </div>
            
                {/* <Pagebtn   btndetail='Backend Development' style='w-24'/> */}





            </div>
      
    </div>
  )
}

export default Technicalheader
