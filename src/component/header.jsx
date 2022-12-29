import style from './header.module.css'
import AppRouter from './router'
import React, {useState,useEffect} from 'react'
import { FaBars , FaTimes, FaUser } from 'react-icons/fa';


function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
      }
      useEffect(() => {

        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', changeWidth)
    
      }, [])
      // const handleLogout = ()=>{
      //   localStorage.removeItem("token")
      //   window.location.reload()
      // }
  return (
    <div>
     <div className="header">
      <header>
      <div className={style.logo}>
      <h1> <a href='/'>eco<span>fly</span></a></h1>
      </div>
    


{(toggleMenu || screenWidth > 900) && (
<div className={style.nav}>
<button className={style.times} onClick={toggleNav}>< FaTimes /></button>
  <div className={style.navdropdown}>
        <a href="/" className={style.navlink}>home</a>
        </div>
    
        <div className={style.navdropdown}>
        <a href="/services" className={style.navlink}>services</a>
          <div className={style.navcontent}>
                  <a href="/bookings">FLIGHT</a>
                  <a href="/packages/hotels">HOTELS</a>
                  <a href="/packages/visa">VISA</a>
                  {/* <a href="">VEHICLE</a> */}
                  {/* <Link to="/packages/#trips">VACATION</Link> */}
                
          </div>
        </div>
        <div className={style.navdropdown}>
        <a href="/tour" className={style.navlink}>tour</a>
          <div className={style.navcontent}>
                  <a href="/tour">POPULAR DESTINATIONS</a>
                  <a href="/tour">CITIES</a>
                  <a href="/packages">OFFERS</a>
                  <a href="/packages">PACKAGES</a>                
          </div>
        </div>
        <div className={style.navdropdown}>
        <a href="/packages" className={style.navlink}>packages</a>
          <div className={style.navcontent}>
                  <a href="/packages/trips">PRIVATE TOURS</a>
                  <a href="/packages/trips">WEEKEND TRIPS</a>
                  <a href="/packages/trips">FAMILY VACATION</a>
                  <a href="/packages/trips">EXCURSION</a>
                  <a href="/packages/trips">BAECATION</a>
                  <a href="/packages/hotels">HOTELS</a>
                
          </div>
        </div>
        <div className={style.navdropdown}>
        <a href="/bookings" className={style.navlink}>flight</a>
        </div> 
        <div className={style.navdropdown} >
        <a href="/profile" className={style.navlink}><FaUser/></a>
        </div> 
        </div>)}
        <button className={style.bars} onClick={toggleNav}>< FaBars /></button>
     
   
      </header> 
    </div>   
    <AppRouter /> 
    <div className={style.footer}>
      <div className={style.foot}>
          <div>
      <div className={style.logo2}>
      <h1> <a href='/'>eco<span>fly</span></a></h1>
      </div>
          </div>
          <div >
            <a href="/contact-us">Contact us</a>
            <a href="/">Blog</a>
            <a href="/">FAQ</a>
            <a href="/">Reviews</a>
            <a href="/">Affiliates</a>
          </div>
          <div>
    
          <a href="/">Learn how ecofly works</a>
          <a href="/">Terms and condition</a>
          <a href="/">Legal information</a>
          <a href="/">Privacy</a>
          <a href="/">Coronavirus (COVID-19) travel advice</a>
          </div>
          <div className={style.address}>
            1st Floor Bami's Place, Abuja.
            <br />
            info@ecofly.com
            <br />
            +234-903-000-4000
          </div>
      </div>
      <div className={style.copyright}>
      <span >  &#169;Copyright 2022 ecofly | All rights reserved.</span>
      <br />
      <span>Made with love by SarahAnnie.</span>
      </div>
    
    </div>
    </div>
  )
}

export default Header
