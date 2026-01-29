import Topbar from "./Topbar"
import Bottom from "./Bottom"
import Middle from "./Middle"
import {useState} from "react"

const ChatContainer=()=>{
    const [messages,setMessages]=useState([]);
    return(
        <div className="w-4/5 relative">
            <Topbar />
            <Middle messages={messages} setMessages={setMessages}></Middle>
            <Bottom setMessages={setMessages}/>
            
        </div>
    )
}
export default ChatContainer