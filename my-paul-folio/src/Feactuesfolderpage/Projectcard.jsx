import React from 'react'
import Technicalexpcard from '../TechnicalExpertSection/Technicalexpertcard/Technicalexpcard'

const Projectcard = ({img,imgstyle, imgdescription,imgdetails,frameworksused}) => {
  return (
    <div>

        <div>

            <div>
                <div>
                    {img && 
                    <div className='relative '>

                        <img src={img} alt="img" className={imgstyle}/>
    
                        <Technicalexpcard Carddetails='View Project' style='absolute top-1 right-2 hover:scale-95 hover:text-white/70 font-semibold bg-gradient-to-r from-[#00D9F5] to-[#8A00FF] my-3 mx-2 py-1 px-3 rounded-[26843500px] '/>

                    </div>

                    }

                </div>



                



            </div>

            <div className='grid gap-2 py-3 mx-3 '>


            <div className='text-2xl font-bold'>
                <p>{imgdetails}</p>
            </div>


            <div>
                <p className='text-sm'>
                    {imgdescription}
                </p>
            </div>


            </div>


       














        </div>
      
    </div>
  )
}

export default Projectcard
