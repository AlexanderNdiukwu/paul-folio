import React from 'react'

export default function Charge({text='react',color='bg-green-400/20'}) {
  return (
    <div>

        <div className={color}>

            <p className='text-center text-xl capitalize font-semibold '>{text}</p>

        </div>
      
    </div>
  )
}
