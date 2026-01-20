import { FaUsers } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import axios from "axios"
import { useEffect,useState } from "react";
import toast from "react-hot-toast";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSelectedUser } from "../redux/userChat";

const Sidebar=()=>{
  const dispatch=useDispatch();
  const userrn=useSelector(state=>state.chat.selectedUser);
  console.log("userrn=",userrn);

    const [users,setUsers]=useState([]);
    const base=import.meta.env.VITE_BASE_URL;
    const fn=async()=>{
        try{
            const data=await axios.get(base+"/allusers",{
            withCredentials:true        
        })
        // console.log(data);
        console.log("data.data.users=",data.data.users);
        setUsers(data.data.users)
        }
        catch(e){
            toast.error("failed to load all users")
        }
    }

    useEffect(()=>{
        fn()
    },[])

    return(
        <div className="flex flex-col max-h-[100%] min-w-48 p-2">
            <div className="flex pl-2 text-pink-300">
            <FaUsers className="size-8 m-2" />
            <div className="m-2 text-[20px]">Contacts</div>
            </div>
            <div className="flex items-center pl-4 pb-4">
                <input type="checkbox"
                    className="size-4 mr-2"
                >                    
                </input>
                <div className="pb-1 text-pink-300">Show online only</div>
            </div>

           {users.map((user) => (
          <button
            key={user._id}
            className={`
              w-full p-3 flex justify-start
              gap-3
              hover:bg-zinc-700
              transition-colors
              cursor-pointer rounded-lg
              ${userrn!==null && 
                userrn._id===user._id?"bg-zinc-700 rounded-lg":""
              }
            `}
            onClick={()=>{
              dispatch(setSelectedUser(user))
            }}
          >
            <div className="relative lg:mx-0 ">
              <img
                src={user.profilePic || "https://imgs.search.brave.com/4_Cn1GE-2TZUtK-Nf2KO_FTwMYMCAeK9KjJ5HdEeikg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE0/OTkyMjI2Ny92ZWN0/b3IvdXNlci1pY29u/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1pNmpZUGZCMXBX/aks4cGxsNllSeEFL/OWZnQm1mNjUtdzV3/YktIOVIxZHlRPQ"}
                alt={user.name}
                className="size-8
                object-cover rounded-full"
              />
              
            </div>

            {/* User info - only visible on larger screens */}
            <div className="lg:block text-left min-w-0">
              <div className="font-medium truncate">{user.fullName}</div>
              <div className="text-sm text-zinc-400">
                
              </div>
            </div>
          </button>
        ))}

        </div>
    )
}
export default Sidebar