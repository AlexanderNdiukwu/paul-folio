import React from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'

const Subherosection = () => {
  return (
    <div>

        <div className='grid grid-cols-4 gap-7 text-4xl font-bold text-[#00D9F5]  '>
            <div className=' border'>
            <Pagebtn btndetail='25' btndetail2sty='text-[#787878] text-base'  btndetail2='AL models' style='px-8 py-7 backdrop-blur-xl' />
            </div>

            <div className=' border'>
            <Pagebtn btndetail='25' btndetail2sty='text-[#787878] text-base' btndetail2='AL models' style='px-8 py-7 backdrop-blur-3xl'/>
            </div>

            <div  className=' border' >
            <Pagebtn btndetail='25' btndetail2sty='text-[#787878] text-base' btndetail2='AL models' style='px-8 py-7 backdrop-blur-3xl'/>
            </div>

            <div  className=' border'>
            <Pagebtn btndetail='25' btndetail2sty='text-[#787878] text-base' btndetail2='AL models' style='px-8 py-7 backdrop-blur-3xl'/>
            </div>
        </div>
      
    </div>
  )
}

export default Subherosection
