import React from 'react'
import Technicalexpcard from '../TechnicalExpertSection/Technicalexpertcard/Technicalexpcard'

const Projectcard = ({img,imgstyle, imgdescription,imgdetails,frameworksused}) => {
  return (
    <div>

        <div>

            <div>
                <div>
                    {img && 
                    <div className='relative rounded-3xl '>

                        <img src={img} alt="img" className={imgstyle}/>
    
                        <Technicalexpcard Carddetails='View Project' style='absolute lg:top-1 top-0 lg:right-2 right-1 hover:scale-90 hover:text-black font-semibold bg-gradient-to-r from-[#00D9F5] to-[#8A00FF] my-3 mx-2 md:py-1 md:px-3 rounded-lg md:rounded-[26843500px] '/>

                    </div>

                    }

                </div>



                



            </div>

            <div className='grid md:gap-1 gap-1 md:py-3 py-1 mx-3  '>


            <div className='md:text-xl text-xl font-bold'>
                <p>{imgdetails}</p>
            </div>


            <div>
                <p className='text-xs '>
                    {imgdescription}
                </p>
            </div>


            </div>


       














        </div>
      
    </div>
  )
}

export default Projectcard
