import {useSelector} from "react-redux"
import { useDispatch } from "react-redux"
import { setSelectedUser } from "../redux/userChat";
import { RxCross1 } from "react-icons/rx";

const Topbar=()=>{
    const userrn=useSelector(state=>state.chat.selectedUser);
    const dispatch=useDispatch();

    return(
        <div className="w-full p-4 border-b border-black border-b-2">
            <div className="flex justify-between w-full">
                <div className="flex gap-4 items-center">
                <img src={userrn.pic!==""?userrn.pic : "https://imgs.search.brave.com/4_Cn1GE-2TZUtK-Nf2KO_FTwMYMCAeK9KjJ5HdEeikg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjE0/OTkyMjI2Ny92ZWN0/b3IvdXNlci1pY29u/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1pNmpZUGZCMXBX/aks4cGxsNllSeEFL/OWZnQm1mNjUtdzV3/YktIOVIxZHlRPQ"} 
                className="size-10 rounded-full"
                ></img>
                <div>
                    {userrn.fullName}
                    <div>offline</div>
                </div>
                </div>
                <div className="text-xl cursor-pointer" onClick={()=>{
                    dispatch(setSelectedUser(null))
                }}>
                    <RxCross1 />
                </div>

            </div>
        </div>
    )
}
export default Topbar