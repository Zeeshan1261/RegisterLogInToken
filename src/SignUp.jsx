import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp({Users,setUsers}) {
    const [Id,setId] = useState('')
    const [password,setPassword] = useState('')
    // const [submit,setSubmit] = useState(Users)
    console.log(Id);
    // console.log(submit);

   const myData = {Id,password}
    const Register = ()=> {
    setUsers((prev)=> [...prev,myData])        
    }
    return(
        <> 
    <Link to='/'><button>Home</button></Link>
    <Link to='/login'><button>LogIn</button></Link>

    <h1>SignUp to MyPage.com</h1>

    <input onChange={(e)=> setId(e.target.value)} type={'text'} placeholder="SetUserId"></input> <br></br>
    <input  onChange={(e)=> setPassword(e.target.value)} type={'password'} placeholder="SetPassword"></input> <br></br>
    <button onClick={()=> Register()}>Register</button>
        </>
    )
}
export default SignUp