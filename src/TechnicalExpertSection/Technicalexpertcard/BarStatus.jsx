import React from 'react'

const BarStatus = ({Listofskills,statusPercentage,Outerstatus,Innerstatus}) => {
  return (
    <div>
        <div className='md:my-3 my-1 mx-4'>
            <div className='flex justify-between text-base text-[#666666]'>
            <div>
                {Listofskills}
            </div>

            <div className='text-[#00D9F5] '>
                {statusPercentage}
            </div>

            </div>


            <div>
              
                <div className={`w-full h-2 bg-[#41575D] rounded-[26843500px] ${Outerstatus}`}>
                    
                    <div className={`w-[95%] rounded-[26843500px] h-2 bg-gradient-to-r to-[#8A00FF] from-[#00D9F5] via-[#3489F9] ${Innerstatus}`}>
                        

                    </div>

                </div>
                
            </div>

        </div>
      
    </div>
  )
}

export default BarStatus
