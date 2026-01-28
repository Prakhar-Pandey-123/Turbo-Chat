import { useSelector } from "react-redux"
import { useEffect } from "react"
import axios from "axios";

const Middle=()=>{
    let userrn=useSelector(state=>state.chat.selectedUser);
    const base=import.meta.env.VITE_BASE_URL;
    const fn=async()=>{
        const data=await axios.post(base+"/getMssg",{
            id:userrn
        },{
            withCredentials:true
        });
        console.log(data);
    }
    useEffect(()=>{
        fn()
    },[userrn])    

    return(
        <div>
            
        </div>
    )
}
export default Middle