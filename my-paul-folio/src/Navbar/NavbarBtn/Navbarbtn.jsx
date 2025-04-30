import React from 'react'

const Navbarbtn = ({style1,style,btndetail,img}) => {
  return (
    <div >

        <div className={style1}>

        <div className={style}>

            {img && <img src={img} alt="img" />}

          

            <p>{btndetail}</p>


        </div>
        </div>

      
    </div>
  )
}

export default Navbarbtn
