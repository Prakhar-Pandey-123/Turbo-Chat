import { FaRegMessage } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
const navigate=useNavigate()
const [password,setPassword]=useState("")
const [email,setEmail]=useState("")


async function create(e){
    try{
        e.preventDefault()
    const url=import.meta.env.VITE_BASE_URL
    console.log("url is=",url)

    console.log("password is ",password)
    console.log("email is ",email)

    const res=await axios.post(url+"/login",{
        email:email,
        password:password
    },{
        withCredentials:true
    });
    const token=res.data.token;
    // console.log("res.data=",res.data);
    localStorage.setItem("jwt",token);
    localStorage.setItem("id",res.data.userId)
    localStorage.setItem("token",token);
    console.log("token =" ,token);
    toast.success("Logged in successfully")
    navigate("/profile")
    }
    catch(e){
        toast.error("error in logging in")
    }
    }
    return (
        <>
            <div className="grid grid-cols-2 bg-zinc-800">
                {/* left block */}
                <div className="min-h-screen  flex items-center justify-center">
                    <div className="bg-zinc-800 flex flex-col items-center text-pink-200">
                        <FaRegMessage className="text-lg"/>
                        <div className="text-xl">Welcome Back</div>
                        <div className="text-[12px]">Sign in to your account</div>
                        
                        <form onSubmit={create} 
                        className="flex flex-col text-xl ">

                            <label className="text-[20px] pt-4">
                                Email
                            </label>
                            <input className="border-2 border-zinc-900 my-2 text-white" placeholder="Enter your email" type="email"
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                            >
                            </input>


                            <label className="text-md">
                                Password
                            </label>
                            <input className="border-2 border-zinc-900 my-2 text-white rounded-md " placeholder="Enter your password " type="password"
                            onChange={(e)=>{
                                setPassword(e.target.value)
                            }}
                            >
                            </input>

                            <button type="submit" className="border border-2 mt-2 cursor-pointer bg-blue-700 text-[15px] p-2 rounded-md">
                                Sign In
                            </button>
                        </form>
                        <button 
                        onClick={()=>{
                            navigate("/signup")
                        }}
                        className="mt-2 text-white hover:underline cursor-pointer text-pink-200">
                            click here to Sign Up
                        </button>
                        
                    </div>
                </div>

                {/* right block */}
                <div></div>
            </div>
        </>
    )
}
export default SignUp