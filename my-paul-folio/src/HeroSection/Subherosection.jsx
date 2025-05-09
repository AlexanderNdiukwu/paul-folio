import React from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'

const Subherosection = () => {
  return (
    <div className=''>

        <div className='grid grid-cols-4 gap-8 text-4xl font-bold text-[#00D9F5] pt-10 w-full h-full '>
            <div className=' '>
            <Pagebtn btndetail='25' btndetail2sty='text-[#787878] text-base'  btndetail2='AL models' style='px-8 py-7 bg-[#F8F8F8] shadow-2xl' />
            </div>

            <div className=' '>
            <Pagebtn btndetail='25' btndetail2sty='text-[#787878] text-base' btndetail2='AL models' style='px-8 py-7 shadow-2xl bg-[#F8F8F8]  '/>
            </div>

            <div  className=' ' >
            <Pagebtn btndetail='25' btndetail2sty='text-[#787878] text-base' btndetail2='Web Applications' style='px-8 py-7 shadow-2xl bg-[#F8F8F8]'/>
            </div>

            <div  className=' '>
            <Pagebtn btndetail='25' btndetail2sty='text-[#787878] text-base' btndetail2='Robots Built' style='px-8 py-7 shadow-2xl bg-[#F8F8F8] '/>
            </div>
        </div>
      
    </div>
  )
}

export default Subherosection
