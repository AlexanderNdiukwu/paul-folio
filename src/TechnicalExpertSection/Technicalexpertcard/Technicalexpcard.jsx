import React from 'react'

const Technicalexpcard = ({Carddetails,style}) => {
  return (
    <div>

        <div className={style}>
          <div className='mx-2'>
                {Carddetails}

          </div>
        </div>
      
    </div>
  )
}

export default Technicalexpcard
