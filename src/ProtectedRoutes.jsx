import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoutes({DashBoard}) {
    const navigate = useNavigate()
    useEffect(()=> {
    let myToken = localStorage.getItem("token") 
    if(!myToken) {
    navigate('/')
        }
    })
    return(
        <> 
        <h1>Hello</h1>
        <DashBoard/>
        </>
    )
}

export default ProtectedRoutes