import React from 'react'
import Icon from '../../public/images/SvgPhoto/Icon'
 
function Logo() {
  return (
    <div className=' flex items-center'>
        <p className=' py-2 md:pr-2 pr-1'>
        <Icon className="h-7 w-8  md:h-9 md:w-11  items-center  p-[4px] bg-gradient-to-r from-[#0a0aaf] to-[#4e4e75] rounded-xl inline-block shadow-2xl shadow-[#0a0aaf]/70 " />
        
        </p>

       <div>

        <div >


        <div className='font-bold lg:text-base text-white text-[9px]'>
        <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#0a0aaf] via-[#00c2ff] to-[#4e4e75]'>
          Ndiukwu Paul Chukwuemeka 
        </p>
        </div>

        <div className='flex items-center md:gap-2 gap-1'>

        <p className='bg-[#0ba622] md:size-2 size-1.5 rounded-4xl animate-pulse '></p>

        <p className='text-[9px] text-green-600 md:text-base '>
          Avaliable for hire
        </p>


        </div>


        </div>




       </div>




      


      
    </div>
  )
}

export default Logo
