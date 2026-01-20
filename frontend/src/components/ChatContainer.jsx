import Topbar from "./Topbar"
import Bottom from "./Bottom"
import Middle from "./Middle"
const ChatContainer=()=>{
    return(
        <div className="w-4/5 relative">
            <Topbar />
            <Middle></Middle>
            <Bottom />
            
        </div>
    )
}
export default ChatContainer