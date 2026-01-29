import { Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Settings from "./pages/Settings"
import { Toaster } from "react-hot-toast"
import Profile from "./pages/Profile"
import ProtectedRoute from "./components/ProtectedRoute"
import { useSelector } from "react-redux"
// useSelectore is basically used to pick the current state of slice or store and get that data in a file

import { useEffect } from "react"
import { socket } from "./socket"

function App(){
  const token=localStorage.getItem("token");

  useEffect(()=>{
      socket.connect();
      console.log("socket connecting..")
    
    return()=>{
      socket.disconnect();
      console.log("socket disconnecting..")
    }
  },[])
// lets say i opened the website , app.jsx loads so socket is made, and then i did refresh so that socket is destroyed and new will be made
  const theme=useSelector((state)=>state.theme.value)
  return(
    <div className="h-screen bg-base-200 w-[100%]  overflow-hidden" data-theme={theme} >
      <Navbar />
      <Routes>
        <Route element={<ProtectedRoute>
          <Home></Home></ProtectedRoute>
          } path="/"></Route>
        <Route element={<SignUp></SignUp>} path="/signup"></Route>
        <Route element={<Login></Login>} path="/login"></Route>

        <Route element={<ProtectedRoute>
          <Settings></Settings></ProtectedRoute>
          } 
          path="/settings">
          </Route>
        
        <Route element={<ProtectedRoute><Profile></Profile></ProtectedRoute>} path="/profile"></Route>
      </Routes>
      <Toaster position="top-right"></Toaster>

    </div>
  )
}
export default App
