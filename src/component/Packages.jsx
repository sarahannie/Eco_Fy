import React from 'react'
import Trip from './trip'
import style from './packages.module.css'


function Packages() {


   
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
