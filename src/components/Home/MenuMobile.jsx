import { Link } from "react-router-dom"

import styleMobile from "../styles/MenuMobile.module.css"






export default function MenuMobile(){
 
    return(
     <>
     
      <div className={styleMobile.Container}>
        <nav className={styleMobile.nav}>
        <Link className={styleMobile.Links} to={'Masculino'}>
                Masculino
             </Link>

             <Link className={styleMobile.Links} to={'Feminino'}>
             Feminino
              </Link>

              <Link className={styleMobile.Links} to={'Infantil'}>
                Infantil
              </Link>
            
        </nav>
            
            
            
           
          

      </div>

     </>
    )

}