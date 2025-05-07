import React from 'react'
import Icon from '../../images/SvgPhoto/Icon'
 
function Logo() {
  return (
    <div className=' flex items-center'>
        <p className=' py-2 pr-2'>
        <Icon className=" items-center  p-[4px] bg-gradient-to-r from-[#0a0aaf] to-[#4e4e75] rounded-xl inline-block shadow-2xl shadow-[#0a0aaf]/70 " />
        
        </p>

       <div>

        <div >


        <div className=' font-bold '>
        <p >
          Ndiukwu Paul Chukwuemeka 
        </p>
        </div>

        <div className='flex items-center gap-2'>

        <p className='bg-[#0ba622] size-2 rounded-4xl animate-pulse '>

        </p>

        <p className=''>
          Avaliable for hire
        </p>


        </div>


        </div>




       </div>




      


      
    </div>
  )
}

export default Logo
