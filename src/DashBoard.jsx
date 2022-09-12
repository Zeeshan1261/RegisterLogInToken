import React from "react";
import { Link } from "react-router-dom";

function DashBoard() {
    return(
        <>
        <h1>You have Sucessfully Logged In</h1>
        <Link to='/'>
        <button  onClick={()=> localStorage.removeItem("token")} >LogOut</button> 
        </Link>
        </>
    )
}
export default DashBoard