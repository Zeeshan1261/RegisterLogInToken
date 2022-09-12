import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()

  useEffect(()=> {
  const myToken = localStorage.getItem("token")
  if(myToken) {
  navigate('/dashboard')
    }
  })
  return (
    <>
  <h1>Welcome to MyPage.com</h1>
  <p>Login,SignUp and more</p>

  <Link to="/login">
  <button>Login</button>
  </Link>
  <Link to='/signup'><button>SignUp</button></Link>
    </>
  );
}
export default Home;
