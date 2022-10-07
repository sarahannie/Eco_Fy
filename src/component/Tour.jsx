import React from 'react'
import ImageSlider from './imageSlider'
import style from './tour.module.css'
import GridCarousel from './gridCarousel'
function Tour() {
  return (
    <div>
      <div>
      <marquee className={style.heading}>Let'us take you around the world</marquee>
      </div>
      <ImageSlider />
      <div>
        <div className={style.dest}>
          <h1>Destinations you can travel to now</h1>
          <p>Top destinations open to people from your location</p>
        </div>
        < GridCarousel />
      </div>
    </div>
  )
}

export default Tour
