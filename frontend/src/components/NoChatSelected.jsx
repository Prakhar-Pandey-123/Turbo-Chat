import { FaRegMessage } from "react-icons/fa6";

const NoChatSelected=()=>{
    return(
        <div className="mx-auto flex flex-col justify-center">
            <div className="flex justify-center flex-col">
                <div className="">
                <FaRegMessage size="50" className="bg-zinc-700 m-2 p-2 rounded-xl mx-auto mb-4 text-pink-200 bg-pink-200"/></div>
                <div className="text-pink-200 text-2xl mx-auto pb-2">
                    Welcome to Turbo-Chat
                </div>
                <div className="mx-auto text-pink-200">
                    Select a conversation from the sidebar to start chatting
                </div>
            </div>
            
        </div>
    )
}
export default NoChatSelected