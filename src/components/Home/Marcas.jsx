

import styleMarcas from "../styles/Marcas.module.css"
import { SiJordan } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";
import { SiNike } from "react-icons/si";

import { SiPuma } from "react-icons/si";
import { Link } from "react-router-dom";




export default function Marcas(){

    return(
        <>
         <div className={styleMarcas.Container}>
           <h1 className={styleMarcas.Titulo}>Marcas</h1>
          
         <span className={styleMarcas.ContainerMarca}>
         <Link to={'Jordan'}>
          <SiJordan className={styleMarcas.LogoMarca}></SiJordan>
          </Link>

          
          <Link to={'Nike'}>
            <SiNike className={styleMarcas.LogoMarca}></SiNike>
            </Link>

            <Link to={'Adidas'}>
            <CgAdidas className={styleMarcas.LogoMarca}></CgAdidas>
            </Link>

            <Link to={'Puma'}>
            <SiPuma className={styleMarcas.LogoMarca}></SiPuma>
            </Link>
         </span>
         
        
            
           
          

         
          
        
         </div>
        
        </>
    )
}