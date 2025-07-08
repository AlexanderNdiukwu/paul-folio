import React from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'
import RotatingFlipCard from '../RotatingFlipCard'

const Subherosection = () => {
  return (
    <div className=' '>

        <div className=' grid md:grid-cols-4 justify-between justify-items-center grid-cols-3 md:gap-8 gap-2  font-bold text-[#00D9F5] pt-10 w-full h-full   md:items-center   '>
            <div className='w-full  md:h-37 border md:w-67 md:rounded-3xl rounded-xl text-center px-2 py-3 shadow-2xl flex justify-center items-center '>
            <Pagebtn btndetail='7' btndetailsty='md:text-4xl text-xl ' btndetail2sty='text-[#787878] md:text-base text-xs ' btndetail2='Work Expreience' style='whitespace-nowrap  '/>
            </div>
             
            <div className='w-full md:h-37 border md:w-67 md:rounded-3xl rounded-xl text-center px-2 py-3  shadow-2xl flex justify-center items-center '>
            <Pagebtn btndetail='25' btndetailsty='md:text-4xl text-xl ' btndetail2sty='text-[#787878] md:text-base text-xs'  btndetail2='Project count ' style='whitespace-nowrap     ' />
            </div>


            <div  className=' w-full md:h-37 border md:w-67 md:rounded-3xl rounded-xl text-center px-2 py-3 shadow-2xl flex justify-center items-center' >
            <Pagebtn btndetail='6' btndetailsty='md:text-4xl text-xl ' btndetail2sty='text-[#787878] md:text-base text-xs' btndetail2='Robots Built' style='whitespace-nowrap '/>
            </div>

            <div  className=' md:h-37 w-full border md:w-67 md:rounded-3xl rounded-xl text-center px-2 py-3  shadow-2xl flex justify-center items-center col-span-3 md:col-span-1'>
            <Pagebtn btndetail='4' btndetailsty='md:text-4xl text-xl ' btndetail2sty='text-[#787878] md:text-base text-xs ' btndetail2='programming Languages' style='whitespace-nowrap text-center  '/>
            </div>


            

          
        </div>
      
    </div>
  )
}

export default Subherosection
