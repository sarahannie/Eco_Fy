import React from 'react'
import style from './bookings.module.css'
import axios from 'axios'
import { useState } from 'react'
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'

function Location() { 
  function onPlaceSelect(value) {
    console.log(value);
  }
 
  function onSuggectionChange(value) {
    console.log(value);
  }
 
    // const handleApi = (e)=>{
      
    //     const config = {
    //       method: 'get',
    //       url: `https://api.geoapify.com/v1/geocode/autocomplete?text=${e.target.value}&apiKey=1c3a53ba0d684232b2c6e62639c5cf68`,
    //       headers: { }
    //     };
        
    //     axios(config)
    //     .then(function (response) {
    //       setApi(response)
    //       console.log(response.data);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });  
    //   }
  return (
    <div>
        <section >
      <div className={style.flexcontainer2}>
      <GeoapifyContext apiKey="1c3a53ba0d684232b2c6e62639c5cf68" className={style.autocompletecontainer}>
      <GeoapifyGeocoderAutocomplete placeholder="From?"
        placeSelect={onPlaceSelect}
        suggestionsChange={onSuggectionChange}
        />
    </GeoapifyContext> 
    <GeoapifyContext apiKey="1c3a53ba0d684232b2c6e62639c5cf68"  className={style.autocompletecontainer}>
      <GeoapifyGeocoderAutocomplete placeholder="To?"
        placeSelect={onPlaceSelect}
        suggestionsChange={onSuggectionChange}
        />
    </GeoapifyContext>  
        <div className={style.date}>
            <input type="date" className={style.from} /><input className={style.to}   type="date"  />
        </div> 
      
        </div>
      </section>
    </div>
  )
}

export default Location
