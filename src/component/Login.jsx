import React from 'react'
import Axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './auth.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
   const [emailReg, setemailReg] = useState("");
   const [passwordReg, setpasswordReg] = useState ("");
   const navigate = useNavigate()

   const login = (e) => {
      e.preventDefault();
        Axios.post("http://localhost:3000/api/login", {
          email: emailReg,
          password: passwordReg,
         },{withCredentials:true}).then((response) => {
            console.log(response.data);
            // localStorage.setItem("token",response.data)
            // window.location = "/"
            if(response.data){
              toast.success(`${response.data}`, {
                position: toast.POSITION.TOP_RIGHT
            });
              navigate('/')
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
      <h1>Login</h1>
      <form action="" className={style.form} >
        <label htmlFor="">Email</label>
        <input type="email"    onChange={(e) => {
              setemailReg(e.target.value);
           }} />
    
        <label htmlFor="">Password</label>
        <input type="password"    onChange={(e) => {
              setpasswordReg(e.target.value);
           }} />
        
        <button onClick={login} >Login</button>
        <ToastContainer/>
      </form>
      <p>Don't have an account? <a href="/register">sign up  here</a></p>
    </div>
  )
}

export default Login
