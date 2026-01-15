import { FaRegMessage } from "react-icons/fa6";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {

const [name,setName]=useState("");
const [password,setPassword]=useState("")
const [email,setEmail]=useState("")

async function create(e){
    e.preventDefault()
    const url=import.meta.env.VITE_BASE_URL
    console.log("url is=",url)

    console.log("name is=",name);
    console.log("password is ",password)
    console.log("email is ",email)

    const res=await axios.post(url+"/signup",{
        fullName:name,
        email:email,
        password:password
    },{
        withCredentials: true, 
      });
    const token=res.data.token;
    localStorage.setItem("jwt",token);
    console.log("token =" ,token);
    }
    return (
        <>
            <div className="grid grid-cols-2 bg-zinc-800">
                {/* left block */}
                <div className="min-h-screen  flex items-center justify-center">
                    <div className="bg-zinc-800 flex flex-col items-center text-pink-200">
                        <FaRegMessage className="text-lg"/>
                        <div className="text-xl">Create Account</div>
                        <div className="text-[12px]">Get started with your free account</div>
                        
                        <form onSubmit={create} 
                        className="flex flex-col text-xl ">
                            <label className="text-[20px]">
                                Full Name
                            </label>
                            <input className="border-2 border-zinc-900 my-2 text-black" placeholder="Enter your name" type="text" onChange={(e)=>{
                                setName(e.target.value)
                            }} >
                            </input>


                            <label className="text-[20px]">
                                Email
                            </label>
                            <input className="border-2 border-zinc-900 my-2 text-black" placeholder="Enter your email" type="email"
                            onChange={(e)=>{
                                setEmail(e.target.value)
                            }}
                            >
                            </input>


                            <label className="text-md">
                                Password
                            </label>
                            <input className="border-2 border-zinc-900 my-2 text-black rounded-md " placeholder="Enter your password " type="password"
                            onChange={(e)=>{
                                setPassword(e.target.value)
                            }}
                            >
                            </input>

                            <button type="submit" className="border border-2 mt-2 cursor-pointer bg-blue-700 text-[15px] p-2 rounded-md">
                                Create Account
                            </button>
                        </form>
                        
                    </div>
                </div>

                {/* right block */}
                <div></div>
            </div>
        </>
    )
}
export default SignUp