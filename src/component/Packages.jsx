import React, { useState } from 'react'
import package1 from './images/package(1).jpg'
import package2 from './images/package (2).jpg'
import package3 from './images/package (3).jpg'

import package4 from './images/package (4).jpg'
import package5 from './images/package (5).jpg'
import package6 from './images/package (6).jpg'
import package7 from './images/package (7).jpg'
import package8 from './images/package (8).jpg'
import package9 from './images/package (9).jpg'
import package10 from './images/package (10).jpg'

import {FaSearch, FaStar} from 'react-icons/fa'
import {ImLocation} from 'react-icons/im'
import Hotel from './hotel'
import Trip from './trip'
import Visa from './visa'
import style from './packages.module.css'


function Packages() {
  const  hotels = 5
  const [more, setMore] = useState(hotels) 
   
   
  const handleMore= ()=>{
    setMore(hotels+more)
  }

  return (
    <div>
    <h1> 
        <a href="/packages/hotels" className={style.a}>Explore hundred of hotel packages at once</a>
   </h1>
    <div>
    
    </div>
    <div id="trips">
    <Trip />
    </div>
    </div>
  )
}

export default Packages
