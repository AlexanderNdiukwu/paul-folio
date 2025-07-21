
import { useRef } from "react"
import Particles from "./HeroBackground/Particles"
import Herosectionpage from "./HeroSection/Herosectionpage"
import NavbarPage from "./Navbar/NavbarPage"
import Subherosection from "./HeroSection/Subherosection"
import Technicalpage from "./TechnicalExpertSection/Technicalpage"
import ProjectMainProject from "./Feactuesfolderpage/ProjectMainProject"
import GetintouchMain from "./Getintouch/GetintouchMain"
import Footermain from "./Footerpage/Footermain"
import Coverdet from "./Coverdet"



function App() {
  const containerRef = useRef()
 
  return (
   <div className="select-none font-serif relative" >



    <div
    ref={containerRef}
    // className="relative w-full h-screen overflow-hidden">

     className="relative w-full h-full overflow-hidden"> 

    <Particles />

    <div className=" w-full fixed top-0 z-50 py-2  ">
    <NavbarPage/>

    </div>
    <div className="relative z-10 md:pt-18 pt-13 h-fit ">


    <Herosectionpage/>



     
    <div>
      <Technicalpage/>
    </div>

    <div className="">
      <ProjectMainProject/>
    </div>
    

    <div className="">

    <div className=" ">
    <div className="relative md:top-1 lg:top-2 top-1  z-30 lg:h-62 h-64  md:h-65  ">
      <GetintouchMain/>
    </div>


    <div className="bg-white/20  z-10 h-70 md:h-54  flex items-end justify-center py-4  ">
    <div className="">
      <Footermain/>

    </div>
   
    </div>

    </div>


    </div>


    
    </div>
    {/* <div >
      <Subherosection/>
    </div> */}

   



    </div>


{/* 
    <div className="" >
      <Coverdet/>
    </div> */}



  




   </div>
  )
}

export default App
