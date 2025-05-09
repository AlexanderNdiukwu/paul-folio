import React, { useState } from 'react'
import Getintouchheader from './Getintouchheader'

const GetintouchMain = () => {
  const [Data, setData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    setData({...Data, [e.target.name]: e.target.value})

  }
    

  let {name, email, message} = Data



  return (
    <div>

        <div className='mx-8 bg-black/5 my-4'>
            <div  >
                <Getintouchheader/>

            </div>

        
           <form action="" method="post">

            <div className='grid grid-cols-2 gap-6'>

                <input type="text" placeholder='Name' name='name' value={name} onChange={handleChange} className='border px-4 py-3 opacity-100 rounded-lg w-full'/>
                <input type="text" placeholder='Email Address' className='border px-4 py-3  backdrop-blur-3xl rounded-lg w-full'/>
                <textarea name="message" placeholder='message' id="" className='col-span-2 my-2 h-50 py-1 px-1 rounded-lg border'></textarea>
                <button type="submit" className='bg-black text-white rounded-lg w-full col-span-2 py-3'>Send Message</button>

            </div>
           </form>




          
          
        </div>
      
    </div>
  )
}

export default GetintouchMain
