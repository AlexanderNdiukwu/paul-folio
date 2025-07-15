import React from 'react'

const Pagebtn = ({style1,style,btndetail,btndetail2,img,btndetailsty,btndetail2sty}) => {
  return (
    <div className='' >

        <div className={style1}>

        <div className={style}>

            {img && <img src={img} alt="img" className='size-3 animate-bounce ' />}

          
           <div>
            <p className={btndetailsty}>{btndetail}</p>

           </div>

            <p className={btndetail2sty}>{btndetail2}</p>


        </div>
        </div>

      
    </div>
  )
}

export default Pagebtn
