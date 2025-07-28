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


        <div className='flex md:mx-20 mx-4  pb-3'>


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
                <button type="submit" className='border text-sm border-[#f02e00]/20 bg-gradient-to-r from-[#f02e00]/30 via-[#f02e00]  to-[#f02e00]/30 rounded-lg w-full py-1  md:py-2'>Send Message</button>
           
       
                    <div className='flex justify-center py-2 items-center'>
                      <hr className='md:w-80 w-20  '/>
                      <div className='px-2'>
                        or
                      </div>
                      <hr className='md:w-80 w-20 '/>

                    </div>
                  
              
               
                 <div className='flex gap-2 items-center justify-center pt-2 '>
                <div><img src="/images/facebook.png" alt="" className='size-7' /></div>
                <div><img src="/images/instagram.png" alt="" className='size-7'/></div>
                <div><img src="/images/linkedin.png" alt="" className='size-6' /></div>
                <div><img src="/images/whatsapp.png" alt="" className='size-6.5'/></div>

                 </div>
              

         
            

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
