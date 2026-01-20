import { CiImageOn } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
const Bottom=()=>{
    function send(){
        
    }
    return(
        <div className="absolute bottom-1 left-0 w-full bg-base-100 rounded-lg">
            <form className="flex items-center justify-between">
                <input type="text" placeholder="Type a message..."
                className="w-3/4 rounded-lg h-12 mb-1 border-3 border-base-300 p-1"
                >
                </input>
                <div className="flex text-3xl gap-4 p-2">
                <CiImageOn className="cursor-pointer "/>
                <IoIosSend className="cursor-pointer"
                onClick={send}
                />
                </div>
            </form>
        </div>
    )
}
export default Bottom