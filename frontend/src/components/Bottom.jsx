import { CiImageOn } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { useState,useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import axios from "axios"
import toast from "react-hot-toast"
import { useSelector } from "react-redux";

const Bottom = () => {
    
    const [img,setImg]=useState(null)
    const [text,setText]=useState("");
    const userrn=useSelector(state=>state.chat.selectedUser);

    const inputref=useRef(null)
    const send =async (e) => {
        try{
            e.preventDefault()
          
        if(text==="" && img===null){
            return;
        }
        
           const base=import.meta.env.VITE_BASE_URL;
        const res=await axios.post(base+"/send",{
            text:text,
            pic:img ?? "",
            id:userrn._id
        },{
            withCredentials:true
        })
        setText("")
        setImg(null)

        }
        catch(e){
            console.log(e)
            toast.error("can't send message")
        }
    }
    const uploadImg=async(e)=>{
        const file=e.target.files[0];
        if(!file) return;
        const reader=new FileReader();
       
        reader.onload=()=>{
            const base64string=reader.result
            setImg(base64string);
        }
         reader.readAsDataURL(file)
         e.target.value = ""
        // readAsDataURL() = “Start cooking food”
// onload = “Food is ready, come eat”
// reader.result = “Cooked food”
    }
    const unuploadImg=()=>{
        setImg(null)
    }
    return (
        // btsb=bracker,tilder,sign,bracket
        <div className="absolute bottom-1 w-full">
        {
            img && <div className="flex flex-col w-40 bg-base-300 px-2 pb-1 rounded-lg">
                <div className="flex justify-end cursor-pointer" width="120" 
                onClick={
                    unuploadImg
                }
                >
                    <RxCross2 />
                </div>
                <img src={img}
                    className="rounded-lg"
                ></img>
            </div>
        }
        <div className="left-0  bg-base-100 rounded-lg">
            <form className="flex items-center justify-between">
                <input type="text" placeholder="Type a message..."
                    className="w-3/4 rounded-lg h-12 mb-1 border-3 border-base-300 p-1"
                onChange={(e)=>setText(e.target.value)}
                value={text}
                >
                </input>
                <div className="flex text-3xl gap-4 p-2">
                    <input type="file" 
                        accept="image/*"
                        onChange={uploadImg}
                        hidden={true}
                        className=""
                        ref={inputref}   
                    >
                    </input>
                    
                    <CiImageOn className="cursor-pointer " onClick={()=>{
                        inputref?.current?.click()
                    }}/>
                   
                    <button type="button" onClick={send}>
                        <IoIosSend className="cursor-pointer"
                        /></button>
                </div>
            </form>
        </div>
        </div>
    )
}
export default Bottom