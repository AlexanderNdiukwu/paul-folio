import React from 'react'

const Technicalexpcard = ({Carddetails,style,img }) => {
  return (
    <div>

        <div className={style}>
          <div className='mx-2'>
                {Carddetails}

          </div>
          {img && 
          
          <div className='flex justify-center items-center'>

            {img.map((i,index)=>

            <div key={index} className='mx-3 flex flex-col justify-center items-center '>
              <img src={i.image} alt="img" className='size-6 justify-center' />
              <p className='text-[10px] italic'>{i.imgdet}</p>

            </div>
            


            )}
          </div>
          }
        </div>
      
    </div>
  )
}

export default Technicalexpcard
