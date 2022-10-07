import React from 'react'
import SimpleImageSlider from 'react-simple-image-slider'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import style from './image.module.css'
import Carousel from 'react-grid-carousel'


function ImageSlider() {
  
  const images =
  [[img1,'New york'],[img1,'Los Angeles'],[img3,'Paris'],[img4,'Italy'],[img5,'Spain']]
  const name = ['New York', 'Angeles','Paris','Italy']
  return (
      <div className={style.imageSlider}>
        <div className={style.left}>
          <h1>Top popular cities</h1>
          <p>See what's popular with other travelers</p>
        </div>
        <div className={style.right}>
        <Carousel rows={1} cols={1} gap={10}
    // arrowLeft={<ArrowBtn type="left" />}
    // arrowRight={<ArrowBtn type="right" />}
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
        {/* <SimpleImageSlider
        showNavs="true"
        width={400}
        height={350}
        images={images}
      />
       */}
        </div>

    </div>
  )
}

export default ImageSlider
