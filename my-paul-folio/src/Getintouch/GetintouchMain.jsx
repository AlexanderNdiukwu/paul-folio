import React from 'react'
import Getintouchheader from './Getintouchheader'

const GetintouchMain = () => {
  return (
    <div>

        <div>
            <div  >
                <Getintouchheader/>

            </div>

        
           <form action="" method="post">

            <div className='grid grid-cols-2 gap-6'>

                <input type="text" placeholder='Name' className='border px-4 py-3 rounded-lg w-full'/>
                <input type="text" placeholder='Email Address' className='border px-4 py-3 rounded-lg w-full'/>
                <textarea name="message" placeholder='message' id="" className='col-span-2 my-2 h-50 py-1 px-1 rounded-lg border'></textarea>

            </div>





           </form>
          
          
        </div>
      
    </div>
  )
}

export default GetintouchMain
