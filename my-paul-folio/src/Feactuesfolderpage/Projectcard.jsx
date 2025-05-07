import React from 'react'
import Technicalexpcard from '../TechnicalExpertSection/Technicalexpertcard/Technicalexpcard'

const Projectcard = ({img,imgstyle, imgdescription,imgdetails,frameworksused}) => {
  return (
    <div>

        <div>

            <div>
                <div>
                    {img && 
                    <div className='relative'>

                        <img src={img} alt="img" className={imgstyle}/>
    
                        <Technicalexpcard Carddetails='View Project' style='absolute bottom-0 bg-gradient-to-r from-[#00D9F5] to-[#8A00FF] my-3 mx-2 py-1 px-3 rounded-[26843500px] '/>

                    </div>

                    }

                </div>



                



            </div>


            <div>
                <p>{imgdetails}</p>
            </div>


            <div>
                <p>
                    {imgdescription}
                </p>
            </div>















        </div>
      
    </div>
  )
}

export default Projectcard
