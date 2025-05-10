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

  const submit = (e) => {
    e.preventDefault() 
    
    console.log(Data)



  }
    

  let {name, email, message} = Data



  return (
    <div className=''>

        <div className='bg-[#1A1A1F] md:mx-8 mx-3 rounded-lg text-white  mt-4  '>


        <div className='flex md:mx-20 mx-4  pb-4'>


        <div className='w-full px-3'>
            <div className='py-4' >
                <Getintouchheader/>

                <div>
                Full-stack developer and robotics engineer specializing in creating innovative solutions that bridge the digital and physical worlds.

                </div>

            </div>

        
           <form action="" method="post" onSubmit={submit}>

            <div className='grid md:grid-cols-2 gap-6 text-white'>
                <div>
                <input type="text" placeholder='Name' name='name' value={name} onChange={handleChange} className='border px-4 py-2 opacity-100 rounded-lg w-full'/>

                </div>

                <div>
                <input type="text" placeholder='Email Address' name='email' value={email} onChange={handleChange} className='border px-4 py-2  backdrop-blur-3xl rounded-lg w-full'/>

                </div>

                <div className='md:col-span-2 w-full h-full'>
                <textarea name="message" placeholder='message' value={message} onChange={handleChange}  className=' p-1 w-full h-20  px-1 rounded-lg border'></textarea>

                </div>
                <div className='md:col-span-2'>
                <button type="submit" className='bg-gradient-to-r from-[#00D9F5] via-[#6E2BFD] to-[#8A00FF] text-white rounded-lg w-full  py-2'>Send Message</button>

                </div>

            </div>
           </form>


        </div>





        </div>


          
        </div>


      
    </div>
  )
}

export default GetintouchMain
