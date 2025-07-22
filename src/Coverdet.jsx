import React, { useState,useEffect } from 'react'
import Moreskills from './Display/Moreskills'
import { div } from 'framer-motion/client'

export default function Coverdet({text}) {
    let [cancel, setcancel] =useState(false)
  

  
  useEffect(() => {
    setcancel(false)
  }, [text])

  let canceldis = ()=>{
    setcancel(!cancel)
    
  }


  return (
    <div>

      {text  &&
  
  
      <div className={`${cancel?'hidden':'block'}`}>
        
  
      <div className='  flex flex-col justify-center w-[100vw] h-[100vh] backdrop-blur-xl  fixed top-10 lg:top-0 z-50  items-center '>
          <div>
          <div className='flex justify-end'>
            <p onClick={canceldis} className='text-blue-700 h-fit'>cancel</p>
          </div>
          <div className='w-[90vw] h-[80vh] lg:w-[80vw] lg:h-[70vh] z-10 rounded-lg px-10 py-7  '>
  
            <div className=''>

              {text=="skills"||text=="skill" && <Moreskills/>}
  
            </div>
  
          </div>
  
          </div>
        
      </div>
  
      </div>
      }
    </div>

  )
}
