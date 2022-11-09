import React, { Component } from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './home'
import Services from './Services'
import Packages from './Packages'
import Contact from './Contact'
import Tour from './Tour'
import Hotels from './hotels'
import Visa from './visa'
import Trip from './trip'
import ContactForm from './ContactForm'
import Login from './Login'
import Register from './Register'
import Profiles from './Profile'


class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <HomePage/>}
           />
            <Route path="/services" element={
            <Services/>}
           />
           <Route path="/packages" element={
            <Packages/>}
           />
            <Route path="/bookings" element={
            <Contact />}
           />
            <Route path="/tour" element={
            <Tour />}
           />
           <Route path="/packages/hotels" element={
            <Hotels />
           }/>
                    <Route path="/packages/visa" element={
            <Visa />
           }/>
                    <Route path="/packages/trips" element={
            <Trip />
           }/>
          <Route path="/contact-us" element={
            <ContactForm />
           }/>
          <Route path="/login" element={
            <Login />}
           />
          <Route path="/register" element={
            <Register />}
           /> 
          <Route path="/profile" element={
            <Profiles />}
           /> 
      </Routes>
      </BrowserRouter>
    )
  }
}

export default AppRouter