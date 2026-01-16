const Profile=()=>{
    
    return(
        <div className="bg-zinc-800 h-screen flex items-center justify-center">
            <div className="flex flex-col bg-zinc-900 min-h-100 min-w-100 text-pink-200 pb-4 rounded-lg">
                <div className="flex flex-col items-center">
                <div className="text-3xl pt-4 pb-2">Profile</div>
                <div className="text-xs pb-2">Your Profile Information</div>
                <input className="bg-white min-h-[120px] max-w-[120px] rounded-full">
                </input>
                
                <div className="text-xs pt-3">
                    click the image to update your profile
                </div>
                </div>
                <div className="flex flex-col text-lg p-2">
                <label className="text-[18px]">
                                Full Name
                            </label>
                            <input className="border-2 border-zinc-600 my-2 text-black rounded-md bg-zinc-600 max-w-90" placeholder="idk" type="text" 
                            onChange={(e)=>{
                                setName(e.target.value)
                            }} >
                            </input>
                            </div>

                            <div className="flex flex-col text-lg p-2">
                <label className="text-[18px]">
                                Email
                            </label>
                            <input className="border-2 border-zinc-600 my-2 text-black rounded-md bg-zinc-600 max-w-90 "
                            readOnly="true" placeholder="idk" type="text" onChange={(e)=>{
                                setName(e.target.value)
                            }} >
                            </input>
                            </div>
                             <div className="pl-4">
                            <div className="text-lg">
                                
                            </div>
                            <div className="flex justify-between max-w-[90%]">
                                <div>
                                   Account Status
                                </div> 
                                <div className="text-green-200">
                                    Active
                                </div>
                                </div>
                            </div>

           
            </div>
        </div>
    )
}
export default Profile