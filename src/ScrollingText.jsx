

import { motion } from 'framer-motion'
import Technicalexpcard from './TechnicalExpertSection/Technicalexpertcard/Technicalexpcard'

export default function ScrollingText({text}) {
  return (
    <div className="overflow-hidden whitespace-nowrap md:w-full bg-transparent  w-[90vw]   ">
      <motion.div
        className=" inline-flex md:text-lg text-[10px] font-medium  px-4 text-white  "
        animate={{ x: ['0%', '-100%'] }}
       transition={{
          repeat: Infinity,
          duration: 15, 
          repeatType:"loop",

          ease: "linear"
      
          
        }}
      >
     
{text}
       
      
      </motion.div>

          <motion.div
        className=" inline-flex md:text-lg text-[10px] font-medium  px-4 text-white "
        animate={{ x: ['0%', '-100%'] }}
       transition={{
          repeat: Infinity,
          duration: 15, 
          repeatType:"loop",

          ease: "linear"
       
          
        }}
      >

        <div className=''>

{text}
        </div>



       
      
      </motion.div>
    </div>
  )
}
