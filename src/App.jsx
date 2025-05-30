
import { useRef } from "react"
import Particles from "./HeroBackground/Particles"
import Herosectionpage from "./HeroSection/Herosectionpage"
import NavbarPage from "./Navbar/NavbarPage"
import Subherosection from "./HeroSection/Subherosection"
import Technicalpage from "./TechnicalExpertSection/Technicalpage"
import ProjectMainProject from "./Feactuesfolderpage/ProjectMainProject"
import GetintouchMain from "./Getintouch/GetintouchMain"
import Footermain from "./Footerpage/Footermain"



function App() {
  const containerRef = useRef()
 
  return (
   <div >



    <div
    ref={containerRef}
    // className="relative w-full h-screen overflow-hidden">

     className="relative w-full h-full overflow-hidden"> 

    <Particles />

    <div className=" w-full fixed top-0 z-50 py-2  ">
    <NavbarPage/>

    </div>
    <div className="relative z-10 pt-17 h-fit  ">

    <Herosectionpage/>



     
    <div>
      <Technicalpage/>
    </div>

    <div className="">
      <ProjectMainProject/>
    </div>
    

    <div className="">

    <div className=" ">
    <div className="relative md:top-12 top-3 z-30 md:h-54 h-40   ">
      <GetintouchMain/>
    </div>


    <div className="bg-white/20  z-10 h-70 md:h-54  flex items-end justify-center md:py-3  ">
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



  




   </div>
  )
}

export default App
