import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Authentication/Login.jsx"
function App (){
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path= "/login" element = {<Login />} />
        
         
    </Routes>
   
    </BrowserRouter>
    </>
  )

}
export default App