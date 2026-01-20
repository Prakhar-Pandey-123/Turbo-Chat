// import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
// import NoChatSelected from "../components/NoChatSelected";
// import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
//   const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-zinc-800">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />

            {/* {!selectedUser ? <NoChatSelected /> : <ChatContainer />} */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
// import Sidebar from "../components/Sidebar"
// const Home=()=>{
//     return(
//         <div className="flex items-center justify-center ">
//             <div className="bg-zinc-900 min-h-screen min-w-230 mt-2 rounded-md">
//                 <Sidebar></Sidebar>
//             </div>

//         </div>
//     )
// }
// export default Home