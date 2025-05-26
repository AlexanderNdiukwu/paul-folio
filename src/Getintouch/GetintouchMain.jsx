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

        <div className='backdrop-blur-3xl/10 md:mx-8 mx-3 rounded-2xl text-white  border border-white/20  '>


        <div className='flex md:mx-20 mx-4  pb-4'>


        <div className='w-full px-3'>
            <div className='py-4 ' >
                <Getintouchheader/>

                <div className='text-sm text-white py-1'>
                Full-stack developer and robotics engineer specializing in creating innovative solutions that bridge the digital and physical worlds.

                </div>

            </div>

        
           <form action="" method="post" onSubmit={submit}>

            <div className='grid md:grid-cols-2 gap-6 text-white '>
                <div>
                <input type="text" placeholder='Name' name='name' value={name} onChange={handleChange} className='border px-4 md:py-2 py-1  opacity-100 rounded-lg w-full'/>

                </div>

                <div>
                <input type="text" placeholder='Email Address' name='email' value={email} onChange={handleChange} className='border px-4 md:py-2 py-1 backdrop-blur-3xl rounded-lg w-full'/>

                </div>

                <div className='md:col-span-2 w-full h-full'>
                <textarea name="message" placeholder='Message' value={message} onChange={handleChange}  className='px-4 p-1 w-full md:h-20 h-15 rounded-lg border'></textarea>

                </div>
                <div className='md:col-span-2'>
                <button type="submit" className='bg-gradient-to-r from-[#00D9F5] via-[#6E2BFD]/80 to-[#8A00FF]/50 text-white rounded-lg w-full py-1  md:py-2'>Send Message</button>

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
