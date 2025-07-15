

import { motion } from 'framer-motion'
import Technicalexpcard from './TechnicalExpertSection/Technicalexpertcard/Technicalexpcard'

export default function ScrollingText({text}) {
  return (
    <div className="overflow-hidden whitespace-nowrap md:w-full bg-transparent py-2 w-[90vw]  ">
      <motion.div
        className=" inline-flex md:text-lg text-sm font-medium text-white px-4   "
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
        className=" inline-flex md:text-lg text-sm font-medium text-white px-4 "
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
    </div>
  )
}
