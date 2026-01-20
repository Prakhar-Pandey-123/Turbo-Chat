import axios from "axios"
import { useEffect, useState } from "react"

const Profile = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const url = import.meta.env.VITE_BASE_URL
  const [selectedImg, setSelectedImg] = useState(null)
  const [img, setImg] = useState(null)

  const handlesubmit1 = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = async () => {
      const base64Image = reader.result
      setSelectedImg(base64Image)

      await axios.post(
        url + "/update",
        {
          fullName: name,
          pic: base64Image,
        },
        { withCredentials: true }
      )

      setSelectedImg(base64Image)
    }
  }

  const handlesubmit = async () => {
    await axios.post(
      url + "/update",
      {
        fullName: name,
        pic: img,
      },
      { withCredentials: true }
    )
  }

  useEffect(() => {
    const xyz = async () => {
      const data = await axios.post(
        url + "/user",
        {},
        { withCredentials: true }
      )

      setName(data.data.user.fullName)
      setEmail(data.data.user.email)

      if (data.data.user.pic === "")
        setImg(
          "https://imgs.search.brave.com/OEgL-2M9v2DIfjeaqhyNI_halzmSks9hFJB6Boi5vo8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8z/NS8zMi9kZWZhdWx0/LXByb2ZpbGUtcGlj/dHVyZS11aS1lbGVt/ZW50LXRlbXBsYXRl/LXZlY3Rvci00NTI0/MzUzMi5qcGc"
        )
      else setImg(data.data.user.pic)
    }
    xyz()
  }, [])

  return (
    <div className="bg-base-100 h-screen flex items-center justify-center ">
      <div className="flex flex-col bg-base-100 text-base-content pb-4 rounded-lg min-h-100 min-w-100">
        <div className="flex flex-col items-center">
          <div className="text-3xl pt-4 pb-2">Profile</div>
          <div className="text-xs pb-2">Your Profile Information</div>

          <div className="flex flex-col items-center gap-4">
            <label htmlFor="avatar-input" className="cursor-pointer">
              <img
                src={selectedImg || img}
                alt="Profile"
                className="h-32 w-32 rounded-full object-cover border-4 border-base-300"
              />
              <input
                id="avatar-input"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handlesubmit1}
              />
            </label>
          </div>

          <div className="text-xs pt-3">
            click the image to update your profile
          </div>
        </div>

        <div className="flex flex-col text-lg p-2">
          <label className="text-[18px]">Full Name</label>
          <input
            className="border border-base-300 my-2 rounded-md bg-base-200 max-w-90 input input-bordered"
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex flex-col text-lg p-2">
          <label className="text-[18px]">Email</label>
          <input
            className="border border-base-300 my-2 rounded-md bg-base-200 max-w-90 input input-bordered"
            readOnly
            value={email}
            type="text"
          />
        </div>

        <div className="pl-4">
          <div className="flex justify-between max-w-[90%]">
            <div>Account Status</div>
            <div className="text-success">Active</div>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            className="btn btn-primary px-6"
            onClick={handlesubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile

// import axios from "axios"
// import { useEffect,useRef,useState } from "react"

// const Profile=()=>{
//     const [name,setName]=useState("")
//     const [email,setEmail]=useState("")
//     const url=import.meta.env.VITE_BASE_URL
//     const [selectedImg,setSelectedImg]=useState(null);
//     const [img,setImg]=useState(null);

//     const handlesubmit1=async(e)=>{
//         const file=e.target.files[0]
//         if(!file) return
//         const reader=new FileReader();
//         reader.readAsDataURL(file)
//         // Base64 = binary data(image) → text
// // Why?
// // JSON can only send text
// // Images are binary
// // So we convert image → text

// // Example:
// // Image bytes: 255 216 255
// // Base64: /9j/
//         reader.onload=async()=>{
//             const base64Image=reader.result;
//             setSelectedImg(base64Image)
//             await axios.post(url+"/update",{
//                 fullName:name,
//                 pic:base64Image
//             },{
//                 withCredentials:true
//             })
//             setSelectedImg(base64Image);
//         }
//     }
//     const handlesubmit=async(e)=>{
//         await axios.post(url+"/update",{
//             fullName:name,
//             pic:img
//         },{
//             withCredentials:true
//         })
        
//     }

//     useEffect(()=>{
//         const xyz=async()=>{
//             const data=await axios.post(url+"/user",{   
//         },{
//             withCredentials:true
//         })
//         console.log("data.data.user=",data.data.user);
//         console.log("data=",data);
//         setName(data.data.user.fullName)
//         setEmail(data.data.user.email);
//         if(data.data.user.pic==="") 
//             setImg("https://imgs.search.brave.com/OEgL-2M9v2DIfjeaqhyNI_halzmSks9hFJB6Boi5vo8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC8z/NS8zMi9kZWZhdWx0/LXByb2ZpbGUtcGlj/dHVyZS11aS1lbGVt/ZW50LXRlbXBsYXRl/LXZlY3Rvci00NTI0/MzUzMi5qcGc")
//         else setImg(data.data.user.pic);
//         }
//         xyz();
//         // the first fn inside useEffect cant be async hence we calling async fn with the fn inside useEffect
//     },[])
//     return(
//         <div className="bg-zinc-800 h-screen flex items-center justify-center">
//             <div className="flex flex-col bg-zinc-900 min-h-100 min-w-100 text-pink-200 pb-4 rounded-lg">
//                 <div className="flex flex-col items-center">
//                 <div className="text-3xl pt-4 pb-2">Profile</div>
//                 <div className="text-xs pb-2">Your Profile Information</div>
//                 {/* input for profile pic */}

//                 <div className="flex flex-col items-center gap-4 ">
                        
//                         <label
//                         htmlFor="avatar-input"
//                         className="cursor-pointer"
                        
//                         >
//                             <img
//                         src={selectedImg || img}
//                         alt="Profile"
//                         className="h-32 w-32 rounded-full object-cover border-4"
//                         >
//                         </img>
//                         <input 
//                         id="avatar-input"
//                         type="file"            className="hidden"
//                         accept="image/*"
//                         onChange={handlesubmit1}      
//                             >
//                         </input>
//                     </label>
                    
//                 </div>

                
                
//                 <div className="text-xs pt-3">
//                     click the image to update your profile
//                 </div>
//                 </div>
//                 <div className="flex flex-col text-lg p-2">
//                 <label className="text-[18px]">
//                                 Full Name
//                             </label>
//                             <input className="border-2 border-zinc-600 my-2 text-black rounded-md bg-zinc-600 max-w-90" placeholder={name}
//                             value={name}  type="text" 
//                             onChange={(e)=>{
//                                 setName(e.target.value)
//                             }} >
//                             </input>
//                             </div>

//                             <div className="flex flex-col text-lg p-2">
//                 <label className="text-[18px]">
//                                 Email
//                             </label>
//                             <input className="border-2 border-zinc-600 my-2 text-black rounded-md bg-zinc-600 max-w-90 "
//                             readOnly="true" placeholder={email} type="text"
//                             value={email} onChange={(e)=>{
//                                 setName(e.target.value)
//                             }} >
//                             </input>
//                             </div>
//                              <div className="pl-4">
//                             <div className="text-lg">
                                
//                             </div>
//                             <div className="flex justify-between max-w-[90%]">
//                                 <div>
//                                    Account Status
//                                 </div> 
//                                 <div className="text-green-200">
//                                     Active
//                                 </div>
//                                 </div>
//                             </div>
//                             <div className="flex justify-center ">
//                             <button className="border border-2 max-w-20 px-2 rounded-md cursor-pointer bg-zinc-700 py-1" onClick={handlesubmit}>
//                                 Submit
//                             </button></div>
//             </div>
//         </div>
//     )
// }
// export default Profile