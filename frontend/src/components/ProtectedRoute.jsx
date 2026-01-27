import axios from "axios"
import { useEffect } from "react"
import {Navigate } from "react-router-dom"

const ProtectedRoute=({children})=>{
     const baseurl = import.meta.env.VITE_BASE_URL
    let token=localStorage.getItem("token")
    useEffect(()=>{
        fn()
    },[])
    const fn=async()=>{
        try{
        const data=await axios.post(baseurl+"/check",{
    
        },{
            withCredentials:true
        })
        return children
    }
    catch(e){
       token="";
    }
    }
    
    if(token===""){
        console.log("directed from protected route")
        return <Navigate to ="/login" ></Navigate>
    }
    return children;
}
export default ProtectedRoute