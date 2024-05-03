import { Link } from "react-router-dom";
import { useState } from "react";
import NavbarStyle from "../styles/Navbar.module.css";
import Logotipo from "../assets/Logotipo.png";
import { FaSearch } from "react-icons/fa";
import { BsFillCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuMobile from "./MenuMobile";








export default function NavBar({ termoPesquisa }) {
  const [toggle, setToggle] = useState(false);
  const [alternar, setAlternar] = useState("");
 

 


  function alternarEstados() {
    setToggle(!toggle);
    setAlternar(toggle ? <MenuMobile /> : "");
  }

  function exportarDado(e) {
    const valorDigitado = e.target.value;
    termoPesquisa(valorDigitado);
   
 
  }

  



 
  return (
  

   
   <>

      <div className={NavbarStyle.Container}>
        
    
        <nav className={NavbarStyle.nav}>
       <Link to={"/"}>
       <img className={NavbarStyle.Logotipo} src={Logotipo} alt="" />
       </Link>
   
          <Link className={NavbarStyle.Links} to={"/Masculino"}>
         
            Masculino
          </Link>

          <Link className={NavbarStyle.Links} to={"/Feminino"}>
            Feminino
          </Link>

          <Link className={NavbarStyle.Links} to={"/Infantil"}>
            Infantil
          </Link>

          <span className={NavbarStyle.ContainerInput}>
            <input
              onBlur={exportarDado}
              type="text"
              placeholder="O que você procura?"
          
              
           
            />
            <button className={NavbarStyle.btnPesquisa}>
              <FaSearch className={NavbarStyle.iconePesquisa} />
            </button>
          </span>

          <BsFillCartFill className={NavbarStyle.CarrinhoCompra} />
          <div className={NavbarStyle.circulo}>
      
          </div>

          <GiHamburgerMenu
            onClick={alternarEstados}
            className={NavbarStyle.MenuMobile}
          />
        </nav>
      </div>

      <p style={{ color: "red" }}>{alternar}</p>
    </>
  );
}
