import React from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'
import RotatingFlipCard from '../RotatingFlipCard'
import CountUp from '../CountUp'
import RotatingText from '../RotatingText'


const Subherosection = () => {
  return (
    <div className=' '>

        <div className=' grid lg:grid-cols-4 justify-between justify-items-center grid-cols-3 lg:gap-8 gap-2  font-bold text-white pt-8 w-full h-full   md:items-center   '>
            <div className='w-full   lg:h-30  h-17 lg:w-74 md:rounded-3xl shadow-md md:shadow-lg rounded-xl text-center px-2 py-3 shadow-[#00c2ff] flex justify-center items-center '>
            <Pagebtn btndetail= 

{<CountUp
  from={0}
  to={5}
  separator=","
  direction="up"
  duration={10}
  className="count-up-text"
/>}
 btndetailsty='md:text-4xl text-xl ' btndetail2sty=' md:text-xl text-[10px] ' btndetail2='Work Experience' style='whitespace-nowrap  '/>
            </div>
             
            <div className='border-black w-full lg:h-30 border lg:w-74 md:rounded-3xl rounded-xl text-center px-2 py-3  shadow-md md:shadow-lg shadow-[#00c2ff] flex justify-center items-center '>
            <Pagebtn btndetail={<CountUp
  from={0}
  to={25}
  separator=","
  direction="up"
  duration={10}
  className="count-up-text"
/>} btndetailsty='md:text-4xl text-xl' btndetail2sty=' md:text-xl text-[10px] '  btndetail2='Project count ' style='whitespace-nowrap     ' />
            </div>
{/* text-[#787878] */}

            <div  className='   w-full lg:h-30  lg:w-74 md:rounded-3xl rounded-xl text-center px-2 py-3 shadow-md md:shadow-lg shadow-[#00c2ff] flex justify-center items-center' >
            <Pagebtn btndetail={<CountUp
  from={0}
  to={6}
  separator=","
  direction="up"
  duration={10}
  className="count-up-text"
/>} btndetailsty='md:text-4xl text-xl' btndetail2sty=' md:text-xl text-[10px] ' btndetail2='Robotic & AI' style='whitespace-nowrap '/>
            </div>

            <div  className=' lg:h-30   h-17 w-full  lg:w-74 md:rounded-3xl rounded-xl text-center px-30  py-2 my-1 border border-[#00c2ff]/20 md:shadow-lg shadow-md shadow-[#00c2ff] flex justify-center items-center col-span-3 lg:col-span-1'>
            <Pagebtn btndetail=
  
{<RotatingText
  texts={[ "4",'Python', 'JavaScript', 'C++', 'Java']} 
  mainClassName=" text-white md:text-3xl text-lg overflow-hidden px-2   h-10 md:h-11 md:h-10 pr-3  justify-center rounded-lg whitespace-nowrap"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 5 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-5   md:pb-1"
  transition={{ type: "spring", damping: 70, stiffness: 400 }}
  rotationInterval={3000}
/>
}
  btndetailsty='md:text-4xl text-xl' btndetail2sty=' md:text-xl text-[10px] ' btndetail2='programming Languages' style='whitespace-nowrap text-center  '/>
            </div>


            

          
        </div>
      
    </div>
  )
}

export default Subherosection
