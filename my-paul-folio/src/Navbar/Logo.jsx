import React from 'react'
import Icon from '../../images/SvgPhoto/Icon'
 
function Logo() {
  return (
    <div className=' flex items-center'>
        <p className=' py-2 px-4'>
        <Icon className=" items-center  p-[4px] bg-gradient-to-r from-[#0a0aaf] to-[#4e4e75] rounded-xl inline-block shadow-2xl shadow-[#0a0aaf]/70 animate-pulse" />

        </p>

       <div>

        <div >


        <div className='text-white'>
        <p >
          Ndiukwu Paul Chukwuemeka 
        </p>
        </div>

        <div className='flex items-center gap-2'>

        <p className='bg-[#28CA41] size-2 rounded-4xl animate-pulse '>

        </p>

        <p className='text-white'>
          Avaliable for hire
        </p>


        </div>


        </div>




       </div>




      


      
    </div>
  )
}

export default Logo
