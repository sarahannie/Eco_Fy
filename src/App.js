
import Header from './component/header';
import ReactGA from "react-ga";
import {useEffect} from 'react'

function App() {
  ReactGA.initialize("UA-242637588-1")
  ReactGA.pageview("/")
  ReactGA.pageview("/packages")
  ReactGA.pageview("/services")
  ReactGA.pageview("/bookings")
  ReactGA.pageview("/tour")
  ReactGA.pageview("/packages/hotel")
  ReactGA.pageview("/packages/trips")
  ReactGA.pageview("/contact-us")
  ReactGA.pageview("/login")
  ReactGA.pageview("/register")
  ReactGA.pageview("/profile")
  useEffect(() => {
    window.gapi.load("auth2"); //(1)
  });
  return (
    <div className='App'>
    
    {/* <AuthRouter /> */}
    <Header />
    {/* <Report/> */}
    </div>
  );
}

export default App;
