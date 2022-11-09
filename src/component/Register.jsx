import React from 'react'
import Axios from 'axios';
import { useState } from 'react';
import style from './auth.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
   const [fname, setFname] = useState("");
   const [lnameReg, setlnameReg] = useState("");
   const [emailReg, setemailReg] = useState("");
   const [passwordReg, setpasswordReg] = useState ("");
   
   
   const register = async (e) => {
      e.preventDefault();
      await Axios.post("http://localhost:3000/api/register", {
          firstname: fname,
          lastname: lnameReg,
          email: emailReg,
          password: passwordReg,
         },{withCredentials:true}).then((response) => {
            // setRegister(true)
            
            // cookies.set("TOKEN", response.data.token, {
            //    path: "/",
            //  });
            //  window.location.href = "/ecofly";
            //navigate('/login')
           
          
            console.log(response.data);
            if(response.data){
              toast.success(`${response.data.message}`, {
                position: toast.POSITION.TOP_RIGHT
            });
              // navigate('/login')
            }
         }).catch((error) => {
            if (error.response) {
               // The request was made and the server responded with a status code
               // that falls out of the range of 2xx

               console.log(error.response.data);
               toast.error(`${error.response.data}`, {
                position: toast.POSITION.TOP_RIGHT
            });
               // console.log(error.response.status);
               // console.log(error.response.headers);
             } else if (error.request) {
               // The request was made but no response was received
               // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
               // http.ClientRequest in node.js
               console.log(error.request);
             } else {
               // Something happened in setting up the request that triggered an Error
               console.log('Error', error.message);
             }
             console.log(error.config);
         
          });
       };

  return (
    <div className={style.formcontainer}>
      {/* <div className='message'>
        {registered  ? (<p>{message.message}</p>) : (<p>{errormsg.data}</p>) }
      </div> */}
      <h1>Register</h1>
      <form action="" className={style.form} >
        <ToastContainer/>
        <label htmlFor="">Firstname</label>

        <input type="text" onChange={(e) => {setFname(e.target.value);
           }}/>
        <br />
        <label htmlFor="">Last Name</label>
        <input type="text"     onChange={(e) => {
              setlnameReg(e.target.value);
           }}/>
        <br />
        <label htmlFor="">Email</label>
        <input type="email"    onChange={(e) => {
              setemailReg(e.target.value);
           }} />
        <br />
        <label htmlFor="">Password</label>
        <input type="password"    onChange={(e) => {
              setpasswordReg(e.target.value);
           }} />
        <br />
        {/* <label htmlFor="">Confirm password</label>
        <input type="password" />
        <br /> */}
        <button onClick={register} >Register</button>
        
      </form>
      <p>Have an account already? <a href="/login">login</a></p>
    </div>
  )
}

export default Register
