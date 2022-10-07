import React from 'react'
import Booking from './Booking'
import style from './services.module.css'
import visa from './images/visa.jpg'
import car from './images/carr.jpg'
import plane from './images/plan.jpg'
import trip from './images/trip.jpg'
import hotel from './images/package (5).jpg'
import { useNavigate } from 'react-router-dom'


function Services() {
  const navigate = useNavigate()
  return (
    <div>
    <div className={style.flexcontainer}>
      <h1>What we offer</h1>
      <div className={style.div} onClick={()=>{navigate('/packages/visa')}}>
        <img src={visa} alt="" />
        <div >
        <h2>Visa Application</h2>
        <p>ECOFLY helps you with an easy visa application with an affordable price.</p>
        </div>
        
      </div>
      <div  className={style.div} onClick={()=>{navigate('/packages')}}>
        <img src={trip} alt="" />
        <div>
        <h2>Vacation Packages</h2>
        <p>ECOFLY organizes vacation packages at affordable prices</p>
        </div>
      </div>
      <div  className={style.div} onClick={()=>{navigate('/bookings')}}>
        <img src={plane} alt="" />
        <div>
        <h2>Flight Reservation</h2>
        <p>ECOFLY offers a cheap flight ticket and a reliable airline to any place you want to travel to</p>
        </div>

      </div>
      <div id='vehicle'  className={style.div} onClick={()=>{navigate('/contact-us')}}>
        <img src={car} alt="" />
        <div>
    <h2>Car Reservation</h2>
    <p>Ecofly Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic dolorum modi?</p>
        </div>
        
      
      </div>
      <div  className={style.div} onClick={()=>{navigate('/contact-us')}}>
        <img src={hotel} alt="" />
        <div>
        <h2>Hotel Reservation</h2>
        <p>Ecofly Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, ratione veniam ea labore commodi omnis?</p>
        </div>
      </div>
    </div>  
    </div>
  )
}

export default Services
