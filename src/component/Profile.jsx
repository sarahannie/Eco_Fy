import React,{useEffect} from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'

function Profiles() {
    
  const navigate = useNavigate()
  const [cookies,removeCookie] = useCookies([])
  useEffect(() => {
    const verifyUser = async () => {
      if(!cookies.jwt) {
        navigate('/login');
      }
      else{
        const {data} = await Axios.post(
          "http://localhost:5000",{},
          { withCredentials: true}
        );
        if(!data.status){
          removeCookie("jwt")
          navigate("/login")
        }
        else{
          console.log(` Welcome ${data.user}`)
        }
      }
    };
    verifyUser();
  }, [cookies, navigate , removeCookie]);

  const logOut = () =>{
    removeCookie("jwt")
    navigate("/login")
  }

  return (
    <div>
      <h1>Welcome User</h1>
      <button onClick={logOut}>logout</button>
    </div>
  )
}

export default Profiles
