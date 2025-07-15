import React from 'react'

export default function Charge({text='react',color='bg-[#00ffd1]/70'}) {
  return (
    <div>

        <div className={color}>

            <p className='text-center  text-xl  capitalize font-semibold py-0.5'>{text}</p>

        </div>
      
    </div>
  )
}
