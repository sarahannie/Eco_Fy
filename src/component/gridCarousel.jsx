import React from 'react'
import Carousel from 'react-grid-carousel'
import  ArrowBtn  from 'react-grid-carousel'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import paris from './images/paris.jpg'
import dubai from './images/dubai.jpg'
import seoul from './images/seoul.jpg'
import italy from './images/italy.jpg'
import img6 from './images/slide (1).jpg'
import img7 from './images/slide (2).jpg'
import img8 from './images/slide (3).jpg'
import img9 from './images/slide (4).jpg'
import img10 from './images/slide (5).jpg'
import img11 from './images/slide (6).jpg'
import img12 from './images/slide (7).jpg'
import img13 from './images/slide (8).jpg'
import img14 from './images/slide (9).jpg'
import style from './image.module.css'

function GridCarousel() {
  const images =[
   [img1,'Los Angeles'],[img3,'Canada'], [img4,'Berlin'], [img5,'Portugal'], [paris,'Paris'], [dubai,'Vietnam'], [img6],[img8],[img9],[img10],[img12],[img13]
  ]  
  const name =[
    'Los Angeles','Canada','Berlin','Paris','Switzerland','Iceland','Tokyo','Nambia'
  ] 
  
    return (
      <div className={style.slider}>
    <Carousel rows={1} cols={3} gap={10}
    // arrowLeft={<ArrowBtn type="left" />}
    // arrowRight={<ArrowBtn type="right" />}
    showDots
    >
      {images.map((img, i) => {
      return (
        <Carousel.Item key={i}>
          <div>
            <style>

            </style>
          <img src={img[0]} alt="" width='100%' height='300vh' />
          <p>{img[1]}</p>
          </div>
        </Carousel.Item>
      );
    })}
  </Carousel>
  </div>
  )
}

export default GridCarousel
