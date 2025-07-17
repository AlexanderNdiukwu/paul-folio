import React, { useState } from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'
import Technicalheader from './Technicalheader'
import Technicalexpcard from './Technicalexpertcard/Technicalexpcard'
import BarStatus from './Technicalexpertcard/BarStatus'
import Charge from './Technicalexpertcard/Charge'
import BatteryAnimation from '../BatteryAnimation'
import Loader from '../Loader'
import ChargingBattery from '../ChargingBattery'

const Technicalpage = () => {
    let  [tcharge,settcharge] =useState('')


    let lists=[
            {text:'reat',color:'bg-green-400'},
            {text:'rect',color:'bg-green-400'},
            {text:'ract',color:'bg-green-400'},
            {text:'reac',color:'bg-green-400'},
        ]


        
        // for(let i=0 ; i<10;i++){
            
        
        

        



  return (
    <div>
        <div className=' md:mx-8 mx-3 py-4 '>

            <div className=' pb-10 rounded-lg'>

                


     

            <div className='lg:mx-30   mx-6 pt-6 '>

            <div className='bg-[#444449]/50 relative   w-full h-[55vh] rounded-lg border-b-1 border-[#333]'>
            <div className=' font-bold text-white    flex justify-center '>
                <p className='md:text-4xl text-2xl mb-2 underline text-[#00c2ff] md:w-100 px-4 bg-black/70 md:rounded-b-2xl rounded-b-lg md:rounded-t-sm  md:pb-0.5 py-1  text-center'>About Me </p>
                  <div className='absolute block md:hidden right-2 top-2  rotate-180'> <Loader size="sm" /></div>
                  <div className='absolute hidden md:block right-5 top-2  rotate-180'> <Loader size="md" /></div>



                 
            </div >
                <div className='text-white'><details className="md:hidden bg-black/80 text-white px-4 py-2 rounded-md">
  <summary className="cursor-pointer font-semibold text-[#00c2ff] animate-pulse">
    Hi, I’m Ndiukwu Chukwuemeka Paul 👋
    <span className="block text-sm text-gray-300">Tap to learn more ↓</span>
    <span className="text-sm italic text-gray-400 animate-pulse">
  Tap to learn more →
</span>
  </summary>
  <p className="mt-2 text-sm">
    400L Mechatronics Engineer (UniPort).  
    I build robotics systems and web apps using React, Tailwind, and Django.  
    Passionate about real-world automation.
  </p>
</details>
  </div>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-white font-semibold">
  Ndiukwu Chukwuemeka Paul
</span>

                <div className='h-1 w-full animate-pulse  bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent absolute bottom-0 '>

                </div>
            </div>

            

            <div className='lg:flex grid lg:justify-between  md:gap-40   '>
             <div className='md:mx-0 mx-6'>

              <div className='flex justify-center'>
                <div className=' border-t-4 animate-pulse rounded-t-sm  border-white/20 '>
                <div className='bg-white/5 animate-pulse h-4 w-18'>

                </div>

                </div>
              </div>
            <div className='bg-[#F8F8F8]/5 border border-black/20 rounded-3xl pb-6  md:py-7 pt-4 md:pt-4 md:pb-6 px-4 w-full '>
            <div className='bg-[#F8F8F8]/5 rounded-xl'>
            <div className='text-[#00D9F5]  '>

                <Technicalexpcard Carddetails='Full-Stack Development' style='md:text-3xl  text-2xl py-1 px-1 font-bold'/>
            </div>



            <div className=' bg-black rounded-b-xl '>
            {/* <div className=' bg-[#F8F8F8]/5 rounded-b-xl '> */}
          
            
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            {/* <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/> */}
            <div className='rounded-b-xl overflow-hidden'>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>


            </div>
            {/* <div>
                <BarStatus Listofskills='Frontend (React, Vue, Next.js)' statusPercentage='98%'  />

            </div>

            <div>
                <BarStatus Listofskills='react' statusPercentage='98%'  />
            </div> 
              <div>
                <BarStatus Listofskills='react' statusPercentage='98%'  />
            </div> */}

            </div>

            </div>

            </div>
     </div>

        <div className=' mx-7 md:mx-0'>

              <div className='flex justify-center'>
                <div className='  '>
                <div className='border-t-4 animate-pulse rounded-t-sm  border-white/20'>

                </div>
                <div className='bg-white/10 animate-pulse h-4 w-18'>

                </div>

                </div>
              </div>
            <div className='bg-[#F8F8F8]/5 border border-black/20 rounded-3xl pb-5  md:py-7 pt-4 md:pt-4 md:pb-7 px-3 w-full '>
            <div className='bg-[#F8F8F8]/5 rounded-xl'>
            <div className='text-[#00D9F5]  '>

                <Technicalexpcard Carddetails='Full-Stack Development' style='md:text-3xl  text-2xl py-1 px-1 font-bold'/>
            </div>



            <div className=' bg-black rounded-b-xl '>
            {/* <div className=' bg-[#F8F8F8]/5 rounded-b-xl '> */}
          
           <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'  />
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <div className='rounded-b-xl overflow-hidden'>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>


            </div>
            {/* <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00ffd1] to-transparent' />
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00ffd1] to-transparent'/>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00ffd1] to-transparent'/>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00ffd1] to-transparent'/>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00ffd1] to-transparent'/>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00ffd1] to-transparent' />
            <div className='rounded-b-xl overflow-hidden'>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00ffd1] to-transparent' />


            </div> */}
            {/* <div>
                <BarStatus Listofskills='Frontend (React, Vue, Next.js)' statusPercentage='98%'  />

            </div>

            <div>
                <BarStatus Listofskills='react' statusPercentage='98%'  />
            </div> 
              <div>
                <BarStatus Listofskills='react' statusPercentage='98%'  />
            </div> */}

            </div>

            </div>

            </div>
     </div>

       
          <div className='md:mx-0 mx-5'>

              <div className='flex justify-center'>
                <div className=' border-t-4 animate-pulse rounded-t-sm  border-white/20 '>
                <div className='bg-white/10 animate-pulse h-4 w-18'>

                </div>

                </div>
              </div>
            <div className='bg-[#F8F8F8]/5 border border-black/20 rounded-3xl pb-6  md:py-7 pt-4 md:pt-4 md:pb-7 px-4 w-full '>
            <div className='bg-[#F8F8F8]/5 rounded-xl'>
            <div className='text-[#00D9F5]  '>

                <Technicalexpcard Carddetails='Full-Stack Development' style='md:text-3xl text-center  text-2xl py-1 px-1 font-bold'/>
            </div>



            <div className=' bg-black rounded-b-xl '>
            {/* <div className=' bg-[#F8F8F8]/5 rounded-b-xl '> */}
          

            <Charge text='next.jsx'color='bg-gradient-to-r from-transparent via-[#00c2ff]/50 to-transparent' />
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <div className='rounded-b-xl overflow-hidden'>
            <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent' />


            </div>

         
          
            {/* <div>
                <BarStatus Listofskills='Frontend (React, Vue, Next.js)' statusPercentage='98%'  />

            </div>

            <div>
                <BarStatus Listofskills='react' statusPercentage='98%'  />
            </div> 
              <div>
                <BarStatus Listofskills='react' statusPercentage='98%'  />
            </div> */}

            </div>

            </div>

            </div>
     </div>






            {/* <div className='bg-[#F8F8F8]/30 md:pt-8 pt-4 md:px-8 w-full pb-8 border rounded-3xl border-black/20 '>
            <div className='text-[#00D9F5]  '>

                <Technicalexpcard Carddetails='Backend Development' style='md:text-3xl text-2xl py-2 px-1 font-bold' />
            </div>


           
            <div className='md:py-6 py-3'>
            <div>
                <BarStatus Listofskills='Frontend (React, Vue, Next.js)' statusPercentage='98%'  />

            </div>

            <div>
                <BarStatus Listofskills='react' statusPercentage='98%'  />
            </div> 
              <div>
                <BarStatus Listofskills='react' statusPercentage='98%'  />
            </div>

            </div>

            </div>
 */}




            </div>





            </div>
    
          

            </div>

           





        </div>
      
    </div>
  )
}

export default Technicalpage
