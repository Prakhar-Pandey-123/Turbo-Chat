import axios from "axios"
import { useEffect, useState } from "react"
import {Navigate } from "react-router-dom"

const ProtectedRoute=({children})=>{
     const baseurl = import.meta.env.VITE_BASE_URL
     const [isAuth,setIsAuth]=useState(null);

    // let token=localStorage.getItem("token")
    useEffect(()=>{
        fn()
    },[])
    const fn=async()=>{
        try{
        const data=await axios.post(baseurl+"/check",{
        },{
            withCredentials:true
        })
        setIsAuth(true)
    }
    catch(e){
        setIsAuth(false);
    //    token="";
    //     if(token===""){
    //     console.log("directed from protected route")
    //     return <Navigate to ="/login" ></Navigate>
    // }
    }
    }
    if(isAuth===null) return <div>Loading...</div>
    if(!isAuth) return <Navigate to="/login"></Navigate>
    return children;
}
export default ProtectedRoute