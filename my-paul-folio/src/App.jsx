
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
    className="relative w-full h-screen overflow-hidden">

    <Particles    />

    <div className=" w-full fixed top-0 z-50  ">
    <NavbarPage/>

    </div>
    <div className="relative z-10 pt-17 ">

    <Herosectionpage/>
    <div >
      <Subherosection/>
    </div>
    </div>


    </div>



    <div>
      <Technicalpage/>
    </div>

    <div>
      <ProjectMainProject/>
    </div>

    <div>
      <GetintouchMain/>
    </div>


    <div>
      <Footermain/>
    </div>

  




   </div>
  )
}

export default App
