import React from 'react';
import plane from './plane.mp4'
import style from './home.module.css'
import { FaArrow} from 'react-icons/fa';
import paris from './images/paris.jpg'
import dubai from './images/dubai.jpg'
import seoul from './images/seoul.jpg'
import italy from './images/italy.jpg'
import { Slide } from 'react-slideshow-image';


const HomePage = ()=>{
  
  return (
    <div className={style.home}>
        <video autoPlay muted loop className={style.planeVideo}>
        <source src={plane} type="video/mp4" />
        </video>
        <div className={style.content}>
            <h1>Welcome to ECOFLY TRAVEL</h1>
            <p>The world is waiting</p>
            <button className={style.btn}><a href="/pacakages/trips">explore trips</a></button>
        </div>
        <section className={style.destination}>
        <h1>Top destinations for you</h1>
        <div className={style.gridcontainer}>
        <div className={style.griditem}>
        <img src={paris} alt="" />
        <p>Paris</p>
        </div>
        <div className={style.griditem}>
        <img src={dubai} alt="" />
        <p>Dubai</p>
        </div>
        <div className={style.griditem}>
        <img src={italy} alt="" />
        <p>Italy</p>
        </div>
        <div className={style.griditem}>
        <img src={seoul} alt="" />
        <p>Seoul</p>
        </div>
        </div>
        </section>
    </div>
  )   
}

export default HomePage