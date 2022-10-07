import React, { Component } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Register from './Register'



class AuthRouter extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={
            <Login/>}
           />
              <Route path="/register" element={
            <Register/>}
           /> 
      </Routes>
      </BrowserRouter>
    )
  }
}

export default AuthRouter