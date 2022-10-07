import React from 'react'
import style from './form.module.css'

function ContactForm() {
  return (
    <div className={style.formcontainer}>
        <h1>Send us a message</h1>
      <form action="" className={style.form}>
        <input type="text" placeholder='Name'/>
        <input type="email" placeholder='Email' />
        <textarea name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
        <input type="submit" value="SEND" onClick={()=>{alert('Your message has been recieved . Thanks for contacting us ')}} />
      </form>
    </div>
  )
}

export default ContactForm

