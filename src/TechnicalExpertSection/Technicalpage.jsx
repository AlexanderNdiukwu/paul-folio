import React, { useEffect, useState } from 'react'
import Pagebtn from '../Pagebutton/Pagebtn'
import Technicalheader from './Technicalheader'
import Technicalexpcard from './Technicalexpertcard/Technicalexpcard'
import BarStatus from './Technicalexpertcard/BarStatus'
import Charge from './Technicalexpertcard/Charge'
import BatteryAnimation from '../BatteryAnimation'
import Loader from '../Loader'
import ChargingBattery from '../ChargingBattery'

const Technicalpage = ({data}) => {
    let  [change,setchange] =useState(false)
    let  [senddata,setsenddata] =useState('')
    let [count,setcount]=useState(0)

    let chan = ()=>{
      setchange(!change)
    }
    let send = (a)=>{
        setsenddata(a)
        setcount(count++)
        data(a)
        
      }
  

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

                


     

            <div className='lg:mx-30   mx-3 pt-6 '>

            <div className='bg-[#444449]/50 relative   w-full h-fit rounded-lg border-b-1 border-[#333]'>
            <div className=' font-bold text-white    flex justify-center '>
                <p className='md:text-4xl text-2xl mb-2 underline text-[#00c2ff] md:w-100 px-4 bg-black/70 md:rounded-b-2xl rounded-b-lg md:rounded-t-sm  md:pb-0.5 py-1  text-center'>About Me </p>
                  <div className='absolute block md:hidden right-2 top-2  rotate-180'> <Loader size="sm" /></div>
                  <div className='absolute hidden md:block right-5 top-2  rotate-180'> <Loader size="md" /></div>



                 
            </div >
                <div className='text-white '>
                  <details className="md:hidden  text-white px-2 py-2 rounded-md">
  <summary className="cursor-pointer italic font-semibold text-transparent bg-clip-text bg-gradient-to-r  from-[#00c2ff]  to-white ">
    👋
    Hi, I’m Ndiukwu Chukwuemeka Paul — a 400-level Mechatronics Engineering student at the University of Port Harcourt, Nigeria.  — a robotics and full-stack engineer blending hardware with code.  
I build smart web apps and machines with React, Django, React Native and C++.  
Creative thinker, real-world problem solver.     I build robotics systems and web apps using React, Tailwind, and Django.  
    Passionate about real-world automation. 


    
    <div onClick={chan} className="text-sm italic flex justify-center text-gray-400 animate-pulse">
    {!change ?
"  Tap to learn more ↓" 
:
"Tap to hide "
   }
</div>
  </summary>
  <p className="mt-2 text-center  italic text-transparent bg-clip-text bg-gradient-to-r  from-[#00c2ff]  to-white">
      
   i am based in **Lagos**, Nigeria, and originally from **Imo State**.

I specialize in combining **robotics** and **software engineering** to solve real-world problems, with a focus on intelligent systems and clean UI/UX.

I’m multilingual — fluent in **English, French, Finnish, Igbo,** and **Yoruba**, and I thrive in **team-based, collaborative environments** where innovation and efficiency matter.

  
  </p>
</details>
  </div>
  <div className=" hidden md:block text-transparent bg-clip-text bg-gradient-to-r  from-[#00c2ff]  to-white text-xl font-semibold px-6 py-10 pb-5">
  I'm Ndiukwu Chukwuemeka Paul — i am based in Lagos, Nigeria, and originally from Imo State. I’m multilingual — fluent in English, French, Finnish, Igbo, and Yoruba,
I’m a passionate problem-solver who merges robotics and intelligent software to build real-world solutions.

As a full-stack developer and UI engineer, I bring ideas to life using modern tools like React, Next.js, Tailwind CSS, TypeScript, Django, and C++. — and I build cross-platform mobile apps using React Native. My approach to development is not just technical — it’s creative, human-centered, and constantly evolving.

I thrive on blending hardware intelligence with scalable code, designing UIs with tools like Figma, ShadCN, and DaisyUI, and building robust backend systems using Python, Java, Django, and Node.js. Whether it’s a robotic system or a web app, I believe in thinking beyond the obvious — no dull solutions.

Let’s build smarter, faster, and beautifully.

{/* I'm Ndiukwu Chukwuemeka Paul — a 400-level Mechatronics Engineering student at the University of Port Harcourt, Nigeria.  
I’m a passionate problem-solver who merges **robotics and intelligent software** to build real-world solutions.

As a **full-stack developer and UI engineer**, I bring ideas to life using modern tools like **React, Next.js, Tailwind CSS, TypeScript, Django, and C++** 

I thrive on blending **hardware intelligence with scalable code**, designing UIs with tools like **Figma, ShadCN, and DaisyUI**, and building robust backend systems using **Python, Java, Django, and Node.js**. Whether it’s a robotic system or a web app, I believe in **thinking beyond the obvious** — no dull solutions.

Let’s build smarter, faster, and beautifully. */}


  </div>
  



                <div className='h-1 w-full animate-pulse  bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent absolute bottom-0 '>

                </div>
            </div>

            

            <div className='lg:flex grid lg:justify-between   lg:gap-40   '>
             <div className='lg:mx-0 md:mx-30 mx-6'>

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
          
            
            <Charge text='React.js' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='React Native' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='HTML5' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='Next.js' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='JavaScript' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='TypeScript' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='ShadCN/UI/Daisy/Figma' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            {/* <Charge text='next.jsx' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/> */}
            <div className='rounded-b-xl overflow-hidden'>
            <Charge text='Tailwind/CSS3' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>


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

        <div className=' mx-7 md:mx-30 lg:mx-0'>

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

                <Technicalexpcard Carddetails='Backend Development' style='md:text-3xl  text-2xl py-1 px-1 font-bold'/>
            </div>



            <div className=' bg-black rounded-b-xl '>
            {/* <div className=' bg-[#F8F8F8]/5 rounded-b-xl '> */}
          
           <Charge text='Python' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'  />
           <Charge text='Django' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'  />
            <Charge text='Node.js' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='RESTful APIs' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='Firebase' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='PostgreSQL/MongoDB' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='Express.js' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <div className='rounded-b-xl overflow-hidden'>
            <Charge text='Appwrite' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
           {/* <p className='text-white'>{senddata}</p> */}

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

       
          <div className='md:mx-30 lg:mx-0 mx-5'>

              <div className='flex justify-center'>
                <div className=' border-t-4 animate-pulse rounded-t-sm  border-white/20 '>
                <div className='bg-white/10 animate-pulse h-4 w-18'>

                </div>

                </div>
              </div>
            <div className='bg-[#F8F8F8]/5 border border-black/20 rounded-3xl pb-6  md:py-7 pt-4 md:pt-4 md:pb-7 px-4 w-full '>
            <div className='bg-[#F8F8F8]/5 rounded-xl'>
            <div className='text-[#00D9F5]  '>

                <Technicalexpcard Carddetails='Robotics Development' style='md:text-3xl   text-2xl py-1 px-1 font-bold'/>
            </div>



            <div className=' bg-black rounded-b-xl '>
            {/* <div className=' bg-[#F8F8F8]/5 rounded-b-xl '> */}
          

            <Charge text='c++'color='bg-gradient-to-r from-transparent via-[#00c2ff]/50 to-transparent' />
            <Charge text='Mechatronics Systems Design' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='SolidWorks (3D CAD Modeling)' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='Embedded Systems' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='Python for Robotics' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='Control Systems' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <Charge text='Motors systems' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent'/>
            <div className='rounded-b-xl overflow-hidden'>
            <Charge text='Automation & Sensors' color='bg-gradient-to-r from-transparent via-[#00c2ff] to-transparent' />


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

            
     <div className='text-white flex justify-center-safe text-center py-8 '>

      <p onClick={()=>send('skills')} className='hover:text-white border border-[#00c2ff]/20 bg-gradient-to-r from-transparent via-[#00c2ff]/50 to-transparent py-3 px-6 rounded-2xl text-black'>More Skills </p>
     </div>






            </div>
    
          

            </div>

           





        </div>
      
    </div>
  )
}

export default Technicalpage
