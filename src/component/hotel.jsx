import React from 'react'


import {FaRegHospital, FaStar} from 'react-icons/fa'
import {ImLocation} from 'react-icons/im'
import style from './packages.module.css'

function Hotel(props) {
  return (
     
    <div className={style.pack}>
      
      <section classname={style.packages}>
        <div className={style.package}>
          <div className={style.up}>
            <div className={style.up1}>
            <img className={style.img}
            src={props.img} alt="" />
            <div>
              <h1>{props.name}</h1>
              <p>{props.rate}</p>
              <br />
              <p><ImLocation />{props.location}</p>             
            </div>
            </div>

           
          </div>
          <div className={style.down}>
            <div>
              <p>{props.price}</p>
              <p>Flight + Hotel</p>
              {/* <button>view deal</button> */}
            </div>
          </div>
        </div>
        
      </section>
    </div>
    
  )
}

export default Hotel
