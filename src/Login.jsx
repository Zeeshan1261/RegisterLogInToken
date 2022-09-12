import {React,useState} from "react";
import { Link ,useNavigate} from "react-router-dom";

function Login({Users}) { 
    const[Id,setId] = useState("")
    const[password,setPassword] = useState("")
    const navigate = useNavigate("")
    console.log(Id);
    const details = {Id,password}
   
    const submit = ()=> {
    Users.map((data)=> {      
    if(data.Id === Id && data.password === password) {
    navigate('/dashboard')
    console.log('LoginSucessfull');
    localStorage.setItem("token",JSON.stringify(details)) 
    alert('LogInSucessfull')
 }
 })
 }
   return(
<> 
    <Link to='/'><button>Home</button></Link>
    <Link to='/signup'><button>SignUp</button></Link>
    <h1>Login to MyPage.com</h1>
    <input  onChange={(e)=> setId(e.target.value)} type={"text"} placeholder={"EnterUserId"}></input>  <br></br>
    <input  onChange={(e)=> setPassword(e.target.value)} type={"password"} placeholder={"EnterPassword"}></input> <br></br>
    <button onClick={()=> submit()}>LogIn</button>
    </>
    )
}
export default Login