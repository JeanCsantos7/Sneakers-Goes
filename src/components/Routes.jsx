
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home"
import Masculino from "../Pages/Masculino"
import Feminino from "../Pages/Feminino";
import Infantil from "../Pages/Infantil";
import Nike from "../Pages/Nike";
import Jordan from "../Pages/Jordan";
import Adidas from "../Pages/Adidas";



import Error from "../Pages/Error";

export default function Rotas(){

  
 return(
  
    <>
    <BrowserRouter>
    
     <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/Masculino" element={<Masculino/>}></Route>
      <Route path="/Feminino" element={<Feminino/>}></Route>
      <Route path="/Infantil" element={<Infantil/>}></Route>
      <Route path="/Feminino" element={<Feminino/>}></Route>
      <Route path="/Jordan" element={<Jordan/>}></Route>
      <Route path="/Nike" element={<Nike/>}></Route>
      <Route path="/Adidas" element={<Adidas/>}></Route>
      <Route path="*" element={<Error/>}></Route>

     </Routes>
    </BrowserRouter>
    </>

 )

}