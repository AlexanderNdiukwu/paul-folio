import React from 'react'
import Icon from '../../public/images/SvgPhoto/Icon'
 
function Logo() {
  return (
    <div className=' flex items-center'>
        <p className=' md:py-2 md:pr-2 py-1  pr-1'>
        <Icon className="h-6 w-7  md:h-9 md:w-11  items-center  p-[4px] bg-[#00c2ff]/20 rounded-xl inline-block shadow-2xl shadow-[#0a0aaf]/70 " />
        
        </p>

       <div>

        <div >


        <div className='font-bold lg:text-base text-white '>
        <p className='text-white md:text-[10px] text-[9px] '>
        {/* <p className='text-[#00c2ff]'> */}
         Paul-Folio
        </p>
        </div>

        <div className='flex items-center md:gap-2 gap-1'>

        <p className='bg-[#00c2ff] md:size-1.5 size-1.5 rounded-4xl animate-pulse '></p>

        <p className='text-[8px] text-white  md:text-xs '>
        {/* <p className='text-[9px] text-[#00c2ff]  md:text-base '> */}
        {/* <p className='text-[9px] text-green-600 md:text-base '> */}
          Avaliable for hire
        </p>


        </div>


        </div>




       </div>




      


      
    </div>
  )
}

export default Logo
