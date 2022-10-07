import React from 'react'
import style from './trip.module.css'

function Trip() {
  return (
    <div>
   <h1>
        Explore the World with our luxury trips.
      </h1>
    <div className={style.trips}>
      <div className={style.trip}>
        <img src="" alt="" />
       <div className={style.sec}>
       <div className={style.content}>
            <h1>Europe Vacation</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, exercitationem non labore quidem deleniti maxime.</p>
            Berlin  14 Days $ 13Nights
        </div>
        <div className={style.price}>
            <h2>From</h2>
            <h3>$1000</h3>
            <button><a href="/bookings">Explore</a></button>
        </div>
       </div>
      </div>
      <div className={style.trip}>
        <img src="" alt="" />

        <div className={style.sec}>
        <div className={style.content}>
            <h1>Luxury Trip to Dubai</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, exercitationem non labore quidem deleniti maxime.</p>
            Abu Dhabi 7 Days $ 7Nights
        </div>
        <div className={style.price}>
            <h2>From</h2>
            <h3>$2500</h3>
            <button><a href="/bookings">Explore</a></button>
        </div>
        </div>
       
      </div>
   
      <div className={style.trip}>
        <img src="" alt="" />
        <div className={style.sec}>
        <div className={style.content}>
            <h1>Weekend in SouthAfrica</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, exercitationem non labore quidem deleniti maxime.</p>
            South Africa 3 Days $ 2Nights
        </div>
        <div className={style.price}>
            <h2>From</h2>
            <h3>$9000</h3>
            <button><a href="/bookings">Explore</a></button>
        </div>
        </div>
       
      </div>
      <div className={style.trip}>
        <img src="" alt="" />
        <div className={style.sec}>
        <div className={style.content}>
            <h1>Explore New York</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, exercitationem non labore quidem deleniti maxime.</p>
            New York 7 Days $ 6Nights
        </div>
        <div className={style.price}>
            <h2>From</h2>
            <h3>$3000</h3>
            <button><a href="/bookings">Explore</a></button>
        </div>

        </div>
      </div>
      <div className={style.trip}>
        <img src="" alt="" />
        <div className={style.sec}>
        <div className={style.content}>
            <h1>Holiday in Maldives</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, exercitationem non labore quidem deleniti maxime.</p>
            Maldives 10 Days
        </div>
        <div className={style.price}>
            <h2>From</h2>
            <h3>$3000</h3>
            <button><a href="/bookings">Explore</a></button>
        </div>
        </div>
       
      </div>

    </div> </div>
  )
}

export default Trip
