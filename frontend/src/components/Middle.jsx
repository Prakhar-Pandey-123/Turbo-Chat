import { useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios";
import { useRef } from "react";


const Middle = ({messages,setMessages}) => {
    // const [messages, setMessages] = useState([]);
    const bottomRef=useRef(null)
    let myId = localStorage.getItem("id");
    let userrn = useSelector(state => state.chat.selectedUser);

    useEffect(() => {
  bottomRef.current?.scrollIntoView();
}, [messages]);

    const base = import.meta.env.VITE_BASE_URL;
    const fn = async () => {
        const data = await axios.post(base + "/getMssg", {
            id: userrn
        }, {
            withCredentials: true
        });
        setMessages(data.data.messages);
    }
    useEffect(() => {
        fn()
    }, [userrn])

    return (
        <div className="h-[calc(100vh-270px)] overflow-y-auto px-2">
            {
                messages.map((i, key) => (
                        <div
                         className={`chat ${i.senderId===myId ?"chat-end":"chat-start" }`}
                          key={key}>
                            <div className="chat-bubble">
                                {
                                    i.pic && (
                                        <img src=
                                        {i.pic}
                                    className="mt-2 max-w-[200px] rounded-lg"
                                        >
                                        </img>
                                    )
                                }
                                {i.text && <p>{i.text}</p>}
                            </div>
                        </div>
                )
            )
            }
            <div ref={bottomRef} />
        </div>
    )
}
export default Middle
// absolute right-0 border-2 rounded-full px-4 my-4 bg-base-300 border-base-300 py-1