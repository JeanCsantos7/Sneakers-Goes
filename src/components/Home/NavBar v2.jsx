import { Link } from "react-router-dom";
import { useState } from "react";
import NavbarStyleV2 from "../styles/NavbarV2.module.css";
import Logotipo from "../assets/Logotipo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import MenuMobile from "./MenuMobile";

export default function NavBarV2({ termoPesquisa }) {
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
      <div className={NavbarStyleV2.Container}>
        <nav className={NavbarStyleV2.nav}>
          <Link to={"/"}>
            <img className={NavbarStyleV2.Logotipo} src={Logotipo} alt="" />
          </Link>

          <Link className={NavbarStyleV2.Links} to={"/Masculino"}>
            Masculino
          </Link>

          <Link className={NavbarStyleV2.Links} to={"/Feminino"}>
            Feminino
          </Link>

          <Link className={NavbarStyleV2.Links} to={"/Infantil"}>
            Infantil
          </Link>

          <GiHamburgerMenu
            onClick={alternarEstados}
            className={NavbarStyleV2.MenuMobile}
          />
        </nav>
      </div>

      <p style={{ color: "red" }}>{alternar}</p>
    </>
  );
}
