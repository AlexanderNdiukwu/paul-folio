import React, { useState } from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'
import Technicalheader from './Technicalheader'
import Technicalexpcard from './Technicalexpertcard/Technicalexpcard'
import BarStatus from './Technicalexpertcard/BarStatus'
import Charge from './Technicalexpertcard/Charge'

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

            <div className='bg-white/5 pb-10 rounded-lg'>

                
            <div className='text-4xl font-bold text-white  flex justify-center py-2'>
                <p className='underline '>About Me </p>
                  
            </div >


     

            <div className='md:mx-30 mx-8 py-8 '>

            <div className='bg-white/60 w-full h-60 rounded-lg border-b-4 border-white'>
                <p>about</p>
            </div>

            

            <div className='md:flex grid md:gap-26  '>

        <div>

              <div className='flex justify-center'>
                <div className=' border-t-4 animate-pulse rounded-t-sm  border-amber-400 '>
                <div className='bg-white/10 animate-pulse h-4 w-18'>

                </div>

                </div>
              </div>
            <div className='bg-[#F8F8F8]/15 border border-black/20 rounded-3xl pb-6  md:py-7 pt-4 md:pt-4 md:pb-7 px-4 w-full '>
            <div className='bg-[#F8F8F8]/5 rounded-xl'>
            <div className='text-[#00D9F5]  '>

                <Technicalexpcard Carddetails='Full-Stack Development' style='md:text-3xl  text-2xl py-1 px-1 font-bold'/>
            </div>



            <div className=' bg-[#F8F8F8]/30 rounded-b-xl '>
          

            <Charge text='next.jsx' color={'bg-green-400/20'}/>
            <Charge text='next.jsx' color={'bg-green-400/20'}/>
            <Charge text='next.jsx' color={'bg-green-400/20'}/>
            <Charge text='next.jsx' color={'bg-green-400/20'}/>
            <Charge text='next.jsx' color={'bg-green-400/70'}/>
            <Charge text='next.jsx' color={'bg-green-400/70'}/>
            <div className='rounded-b-xl overflow-hidden'>
            <Charge text='next.jsx' color={'bg-green-400/70'}/>


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

           <div>

              <div className='flex justify-center'>
                <div className=' border-t-4 animate-pulse rounded-t-sm  border-amber-400 '>
                <div className='bg-white/10 animate-pulse h-4 w-18'>

                </div>

                </div>
              </div>
            <div className='bg-[#F8F8F8]/15 border border-black/20 rounded-3xl pb-6  md:py-7 pt-4 md:pt-4 md:pb-7 px-4 w-full '>
            <div className='bg-[#F8F8F8]/5 rounded-xl'>
            <div className='text-[#00D9F5]  '>

                <Technicalexpcard Carddetails='Full-Stack Development' style='md:text-3xl  text-2xl py-1 px-1 font-bold'/>
            </div>



            <div className=' bg-[#F8F8F8]/30 rounded-b-xl '>
          

            <Charge text='next.jsx' color={'bg-green-400/20'}/>
            <Charge text='next.jsx' color={'bg-green-400/20'}/>
            <Charge text='next.jsx' color={'bg-green-400/20'}/>
            <Charge text='next.jsx' color={'bg-green-400/20'}/>
            <Charge text='next.jsx' color={'bg-green-400/70'}/>
            <Charge text='next.jsx' color={'bg-green-400/70'}/>
            <div className='rounded-b-xl overflow-hidden'>
            <Charge text='next.jsx' color={'bg-green-400/70'}/>


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
          <div>

              <div className='flex justify-center'>
                <div className=' border-t-4 animate-pulse rounded-t-sm  border-amber-400 '>
                <div className='bg-white/10 animate-pulse h-4 w-18'>

                </div>

                </div>
              </div>
            <div className='bg-[#F8F8F8]/15 border border-black/20 rounded-3xl pb-6  md:py-7 pt-4 md:pt-4 md:pb-7 px-4 w-full '>
            <div className='bg-[#F8F8F8]/5 rounded-xl'>
            <div className='text-[#00D9F5]  '>

                <Technicalexpcard Carddetails='Full-Stack Development' style='md:text-3xl  text-2xl py-1 px-1 font-bold'/>
            </div>



            <div className=' bg-[#F8F8F8]/30 rounded-b-xl '>
          

            <Charge text='next.jsx' color={'bg-green-400/20'}/>
            <Charge text='next.jsx' color={'bg-green-400/20'}/>
            <Charge text='next.jsx' color={'bg-green-400/20'}/>
            <Charge text='next.jsx' color={'bg-green-400/20'}/>
            <Charge text='next.jsx' color={'bg-green-400/70'}/>
            <Charge text='next.jsx' color={'bg-green-400/70'}/>
            <div className='rounded-b-xl overflow-hidden'>
            <Charge text='next.jsx' color={'bg-green-400/70'}/>


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
