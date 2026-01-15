import { Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Settings from "./pages/Settings"
import { Toaster } from "react-hot-toast"

function App(){
  return(
    <div className="bg-zinc-800">
      <Navbar />
      <Routes>
        <Route element={<Home></Home>} path="/"></Route>
        <Route element={<SignUp></SignUp>} path="/signup"></Route>
        <Route element={<Login></Login>} path="/login"></Route>
        <Route element={<Settings></Settings>} path="/settings"></Route>
      </Routes>
      <Toaster position="top-right"></Toaster>

    </div>
  )
}
export default App
