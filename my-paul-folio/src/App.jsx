
import { useRef } from "react"
import Particles from "./HeroBackground/Particles"
import Herosectionpage from "./HeroSection/Herosectionpage"
import NavbarPage from "./Navbar/NavbarPage"
import Subherosection from "./HeroSection/Subherosection"

function App() {
  const containerRef = useRef()
 
  return (
   <div >



    <div
    ref={containerRef}
    className="relative w-full h-screen overflow-hidden">

    <Particles  />

    <div className="border-b border-[#1E1E22]/70">
    <NavbarPage/>

    </div>
    <div className="relative z-10  p-6">

    <Herosectionpage/>
    </div>

    <div >

      <Subherosection/>

    </div>

    </div>






   </div>
  )
}

export default App
