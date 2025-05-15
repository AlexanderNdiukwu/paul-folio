import React from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'

const Subherosection = () => {
  return (
    <div className=' '>

        <div className='grid md:grid-cols-4 grid-cols-3 md:gap-8 gap-3 md:text-4xl font-bold text-[#00D9F5] pt-10 w-full h-full  '>
            <div className=' '>
            <Pagebtn btndetail='25' btndetail2sty='text-[#787878] text-base'  btndetail2='AL models' style='md:px-8 md:py-7  px-5 py-1 bg-[#F8F8F8] shadow-2xl ' />
            </div>

            <div className=' h-full '>
            <Pagebtn btndetail='25' btndetail2sty='text-[#787878] text-base' btndetail2='AL models' style='md:px-8 md:py-7 px-5 py-1 shadow-2xl bg-[#F8F8F8] '/>
            </div>

            <div  className=' ' >
            <Pagebtn btndetail='25' btndetail2sty='text-[#787878] text-base' btndetail2='Web Applications' style='md:px-8 md:py-7 px-3 py-1 shadow-2xl bg-[#F8F8F8]'/>
            </div>

            <div  className=' col-span-3 md:col-span-1'>
            <Pagebtn btndetail='25' btndetail2sty='text-[#787878] text-base' btndetail2='Robots Built' style='md:px-8 md:py-7 px-5 py-3 text-center shadow-2xl bg-[#F8F8F8] '/>
            </div>

          
        </div>
      
    </div>
  )
}

export default Subherosection
