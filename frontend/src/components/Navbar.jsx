import { FaRegMessage } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { IoLogOutOutline } from "react-icons/io5";

const Navbar=()=>{
    const token=localStorage.getItem("token");
    const navigate=useNavigate();

    const logOut=()=>{
        let token=localStorage.getItem("jwt")
        console.log(token)
        localStorage.setItem("jwt","");
    }

    return(
        <div className="bg-zinc-800"> 
        {
            token?<div className="pt-4 flex items-center justify-around ">
                <div className="flex bg-gray-800 p-2">
                <div className="pr-2 text-pink-200 pt-1">
                    <FaRegMessage/>
                    </div>
                    <div className="text-pink-200">
                     Chatty</div>
                </div>

                <div className="flex  gap-4">

                <button className="text-pink-200 cursor-pointer flex items-center  p-1 rounded-md bg-gray-800"  onClick={()=>navigate("/settings")}>
                    <CiSettings className="m-1" />
                    Settings
                </button>

                <button className="text-pink-200 cursor-pointer flex items-center bg-gray-800 px-1 rounded-md"  onClick={()=>navigate("/settings")}>
                    <CiUser className="m-1" />
                    Profile
                </button>

                <button className="text-pink-200 cursor-pointer flex items-center bg-gray-800 px-1  rounded-md"  onClick={()=>{
                    logOut()
                }}>
                    <IoLogOutOutline className="m-1" />
                    Log Out
                </button>

                </div>
                </div>
                :
                <div>
                </div>
        }
        </div>
    )
}
export default Navbar