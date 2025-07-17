import React from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'
import RotatingFlipCard from '../RotatingFlipCard'
import CountUp from '../CountUp'

const Subherosection = () => {
  return (
    <div className=' '>

        <div className=' grid md:grid-cols-4 justify-between justify-items-center grid-cols-3 md:gap-8 gap-2  font-bold text-[#00D9F5] pt-8 w-full h-full   md:items-center   '>
            <div className='w-full  md:h-32 border md:w-67 md:rounded-3xl rounded-xl text-center px-2 py-3 shadow-2xl flex justify-center items-center '>
            <Pagebtn btndetail= 
{<CountUp
  from={0}
  to={5}
  separator=","
  direction="up"
  duration={0.5}
  className="count-up-text"
/>}
 btndetailsty='md:text-4xl text-xl ' btndetail2sty='text-[#787878] md:text-xl text-xs ' btndetail2='Work Experience' style='whitespace-nowrap  '/>
            </div>
             
            <div className='w-full md:h-32 border md:w-67 md:rounded-3xl rounded-xl text-center px-2 py-3  shadow-2xl flex justify-center items-center '>
            <Pagebtn btndetail={<CountUp
  from={0}
  to={25}
  separator=","
  direction="up"
  duration={5}
  className="count-up-text"
/>} btndetailsty='md:text-4xl text-xl ' btndetail2sty='text-[#787878] md:text-xl text-xs'  btndetail2='Project count ' style='whitespace-nowrap     ' />
            </div>


            <div  className=' w-full md:h-32 border md:w-67 md:rounded-3xl rounded-xl text-center px-2 py-3 shadow-2xl flex justify-center items-center' >
            <Pagebtn btndetail={<CountUp
  from={0}
  to={6}
  separator=","
  direction="up"
  duration={5}
  className="count-up-text"
/>} btndetailsty='md:text-4xl text-xl ' btndetail2sty='text-[#787878] md:text-xl text-xs' btndetail2='Robotic & AI' style='whitespace-nowrap '/>
            </div>

            <div  className=' md:h-32 w-full border md:w-67 md:rounded-3xl rounded-xl text-center px-2 py-3  shadow-2xl flex justify-center items-center col-span-3 md:col-span-1'>
            <Pagebtn btndetail={<CountUp
  from={0}
  to={4}
  separator=","
  direction="up"
  duration={5}
  className="count-up-text"
/>} btndetailsty='md:text-4xl text-xl ' btndetail2sty='text-[#787878] md:text-xl text-xs ' btndetail2='programming Languages' style='whitespace-nowrap text-center  '/>
            </div>


            

          
        </div>
      
    </div>
  )
}

export default Subherosection
