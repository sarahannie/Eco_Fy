import React , {useState,useEffect} from 'react'
import package1 from './images/package(1).jpg'
import package2 from './images/package (2).jpg'
import package3 from './images/package (3).jpg'

import package4 from './images/package (4).jpg'
import package6 from './images/package (6).jpg'
import package8 from './images/package (8).jpg'
import package9 from './images/package (9).jpg'
import package10 from './images/package (10).jpg'

import {FaStar} from 'react-icons/fa' 

import Hotel from './hotel'


function Hotels() {
    const hotels= [
        <Hotel name='Four Seasons Hotel Las Vegas' img={package3} price='$3,274' included='Meals not included' location='Las vegas' rate={FaStar}
        />   ,   
            <Hotel name="Mardi Gras Hotel & Casino" img={package2} price='$2,049' included='Meals not included' location='Las vegas' rate={FaStar}
        />  ,
            <Hotel name='The Times Square EDITION ' img={package10} price='$2,437' included='Meals not included' location='New York' rate={FaStar}
        />  ,
           
            <Hotel name='Radisson Blu Hotel Sandton, Johannesburg' img={package8} price='$1,017' included='Meals not included' location='South Africa' rate={FaStar}
        />   ,  
         <Hotel name='Warere Beach' img={package9} price='$1,499' included='Meals not included' location='Nungwi' rate={FaStar}
        />  ,
            <Hotel name='Mint Hotel 84 On Katherine' img={package4} price='686' included='Meals not included' location='South Africa' rate={FaStar}
        />  ,
            <Hotel name='Four Seasons Hotel Las Vegas' img={package6} price='$3,274' included='Meals not included' location='Las vegas' rate={FaStar}
        />  ,
            <Hotel name='Hotel Indigo Dundee' img={package3} price='$1,839' included='Meals not included' location='Dundee' rate={FaStar}
        />  ,
            <Hotel name='Karibu Beach Resort' img={package1} price='$1,515' included='Meals not included' location='Pongwe' rate={FaStar}
        />  ,
            <Hotel name='Lyndale Holiday Flats' img={package3} price='$3,274' included='Meals not included' location='Blackpool' rate={FaStar}
        />  ,
            <Hotel name='Sejong Hotel' img={package3} price='$2,547' included='Meals not included' location='seoul' rate={FaStar}
        />  ,
            <Hotel name='Radisson Blu Hotel Niamey' img={package10} price='$2,274' included='Meals not included' location='Niamey' rate={FaStar}
        />  ,
            <Hotel name='Bon Hotel Tripod Owerri' img={package9} price='$1,682' included='Breakfast Included' location='Las vegas' rate={FaStar}
        />  ,
            <Hotel name='Atlantis, The Palm' img={package8} price='$2,649' included='Meals not included' location='Dubai' rate={FaStar}
        />  ,
        <Hotel name='Taj Dubai' img={package10} price='$1,835' included='Meals not included' location='Dubai' rate={FaStar}
        />  
    ]
    const [filteredHotels, setFilteredHotels] = new useState(hotels);
    useEffect(()=> setFilteredHotels(hotels))
  return (
    <div>
          <h1>Explore undred of hotel packages at once</h1>
          {/* <div className={style.searchbox}>
           <input type="text"  onChange={filterBySearch}/><a href="/packages/hotels"><FaSearch /></a> 
          </div> */}
          {/* <p>10 of 100 packages</p> */}
          <ol>
          {filteredHotels.map((item, index) => (
           <li key={index}>{item}</li>
        ))}
          </ol>
      

     {/* <div>
        <button>SEE MORE</button>
    </div> */}
    </div>
  )
}

export default Hotels
