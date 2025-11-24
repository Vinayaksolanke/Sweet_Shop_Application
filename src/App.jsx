import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Authentication/Login.jsx"
import Register from "./Pages/Authentication/Register.jsx"  
function App (){
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path= "/login" element = {<Login />} />
      <Route path = "/register" element = {<Register />} />
        
         
    </Routes>
   
    </BrowserRouter>
    </>
  )

}
export default App