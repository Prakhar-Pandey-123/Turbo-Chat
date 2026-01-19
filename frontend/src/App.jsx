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
function App(){
  const token=localStorage.getItem("token");
  const theme=useSelector((state)=>state.theme.value)
  return(
    <div className="min-h-screen" data-theme={theme} >
      <Navbar />
      <Routes>
        <Route element={<Home></Home>} path="/"></Route>
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
