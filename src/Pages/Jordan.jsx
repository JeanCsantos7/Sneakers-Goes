import NavBarV2 from "../components/Home/NavBar v2";
import OutrosCardsJordan from "../components/Jordan/OutrosCardsJordan";
import styleJordan from "../components/styles/Jordan.module.css";
import { useState } from "react";
import Tenis1 from "../components/assets/TÊNIS AIR JORDAN 1 RETRO HIGH MASCULINO.webp";
import Tenis2 from "../components/assets/TÊNIS AIR JORDAN 3 RETRÔ FEMININO.webp";
import Tenis3 from "../components/assets/TÊNIS AIR JORDAN XXXVII ZION MASCULINO.webp";
import Tenis4 from "../components/assets/TÊNIS AIR JORDAN 1 MID SE MASCULINO.webp";
import Tenis5 from "../components/assets/TÊNIS JORDAN MASCULINO.webp";
import Tenis6 from "../components/assets/TÊNIS JORDAN TATUM 1 MASCULINO.webp";
import Tenis7 from "../components/assets/TÊNIS AIR JORDAN 7 RETRÔ MASCULINO.webp";
import Tenis8 from "../components/assets/TÊNIS AIR JORDAN 5 RETRO SE CRAFT MASCULINO.webp";
import Tenis9 from "../components/assets/TÊNIS JORDAN ONE TAKE 4 MASCULINO.webp";
import Tenis10 from "../components/assets/TÊNIS AIR JORDAN 13 RETRÔ TEX MASCULINO.webp";
import Tenis11 from "../components/assets/TÊNIS AIR JORDAN 11 RETRO FEMININO.webp";
import Tenis12 from "../components/assets/TÊNIS JORDAN LUKA 1 NEXT NATURE MASCULINO.webp";
import Tenis13 from "../components/assets/TÊNIS AIR JORDAN LEGACY 312 LOW MASCULINO.webp";
import Tenis14 from "../components/assets/TÊNIS AIR JORDAN 2 RETRO LOW MASCULINO.webp";
import Tenis15 from "../components/assets/TÊNIS AIR JORDAN GREENLIGHT MASCULINO.webp";
import Tenis16 from "../components/assets/AJ4 PSG.webp";
import Tenis17 from "../components/assets/TÊNIS JORDAN SPIZIKE LOW CNY MASCULINO.webp";
import Tenis18 from "../components/assets/TÊNIS JORDAN DOGGFATHER.webp";

export default function Jordan() {
  
  const[toggle, setToggle] = useState(true)
  const[renderizar, setRenderizar] = useState('')
  const[textoBtn, setTexto] = useState('Ver Mais')
  const[textoVisualizacao, setTextoVisualizacao] = useState('Você viu 18 de 33 produtos')
  
  function mostrarCards()
  {

    setToggle(!toggle)
    setRenderizar(toggle ? <OutrosCardsJordan/> : '')
    setTexto(toggle ? 'Ver Menos'  :  'Ver Mais')
    setTextoVisualizacao(toggle ? 'Você viu 33 de 33 produtos'  :  'Você viu 18 de 33 produtos')
  }
  
  
  return (
    <>
      <NavBarV2></NavBarV2>
      <h1 className={styleJordan.Titulo}>Jordan</h1>

      <p className={styleJordan.Informacoes}>
        Bem-vindo à nossa categoria Jordan! Como verdadeiros sneakerheads,
        sabemos que um bom par de tênis é um símbolo de identidade, vem
        conferir.
      </p>

      <h2 className={styleJordan.TituloQuantia}>33 produtos</h2>

      <div className={styleJordan.Container}>
        <div className={styleJordan.ContainerCard}>
          <img className={styleJordan.imagemCard} src={Tenis1} alt="" />
          <h1 className={styleJordan.Nome}>AIR JORDAN 1 RETRO HIGH</h1>
          <h2 className={styleJordan.Preco}>R$ 1699,99</h2>
          <p className={styleJordan.Parcelamento}>10x R$ 169,99</p>
        </div>

        <div className={styleJordan.ContainerCard}>
          <img className={styleJordan.imagemCard} src={Tenis2} alt="" />
          <h1 className={styleJordan.Nome}>AIR JORDAN 3 RETRÔ</h1>
          <h2 className={styleJordan.Preco}>R$ 1.199,99</h2>
          <p className={styleJordan.Parcelamento}>10x R$ 119,99</p>
        </div>

        <div className={styleJordan.ContainerCard}>
          <img className={styleJordan.imagemCard} src={Tenis3} alt="" />
          <h1 className={styleJordan.Nome}>AIR JORDAN XXXVII ZION</h1>
          <h2 className={styleJordan.Preco}>R$ 1.199,99</h2>
          <p className={styleJordan.Parcelamento}>10x R$ 119,99</p>
        </div>
      </div>

      <div className={styleJordan.Container}>
        <div className={styleJordan.ContainerCard}>
          <img className={styleJordan.imagemCard} src={Tenis4} alt="" />
          <h1 className={styleJordan.Nome}>AIR JORDAN 1 MID SE</h1>
          <h2 className={styleJordan.Preco}>R$ 649,99</h2>
          <p className={styleJordan.Parcelamento}>10x R$ 64,99</p>
        </div>

        <div className={styleJordan.ContainerCard}>
          <img className={styleJordan.imagemCard} src={Tenis5} alt="" />
          <h1 className={styleJordan.Nome}>Jordan Jumpman Mvp</h1>
          <h2 className={styleJordan.Preco}>R$ 1.299,99</h2>
          <p className={styleJordan.Parcelamento}>10x R$ 129,99</p>
        </div>

        <div className={styleJordan.ContainerCard}>
          <img className={styleJordan.imagemCard} src={Tenis6} alt="" />
          <h1 className={styleJordan.Nome}>JORDAN TATUM 1 </h1>
          <h2 className={styleJordan.Preco}>R$ 749,99</h2>
          <p className={styleJordan.Parcelamento}>10x R$ 74,99</p>
        </div>
      </div>

      <div className={styleJordan.Container}>
        <div className={styleJordan.ContainerCard}>
          <img className={styleJordan.imagemCard} src={Tenis7} alt="" />
          <h1 className={styleJordan.Nome}>AIR JORDAN 7 RETRÔ</h1>
          <h2 className={styleJordan.Preco}>R$ 1099,99</h2>
          <p className={styleJordan.Parcelamento}>10x R$ 109,99</p>
        </div>

        <div className={styleJordan.ContainerCard}>
          <img className={styleJordan.imagemCard} src={Tenis8} alt="" />
          <h1 className={styleJordan.Nome}>JAIR JORDAN 5 RETRO SE CRAFT</h1>
          <h2 className={styleJordan.Preco}>R$ 1.499,99</h2>
          <p className={styleJordan.Parcelamento}>10x R$ 149,99</p>
        </div>

        <div className={styleJordan.ContainerCard}>
          <img className={styleJordan.imagemCard} src={Tenis9} alt="" />
          <h1 className={styleJordan.Nome}>JORDAN ONE TAKE 4 </h1>
          <h2 className={styleJordan.Preco}>R$ 699,99</h2>
          <p className={styleJordan.Parcelamento}>10x R$ 69,99</p>
        </div>
      </div>

      <div className={styleJordan.Container}>
        <div className={styleJordan.ContainerCard}>
          <img className={styleJordan.imagemCard} src={Tenis10} alt="" />
          <h1 className={styleJordan.Nome}>AIR JORDAN 13 RETRÔ TEX</h1>
          <h2 className={styleJordan.Preco}>R$ 1599,99</h2>
          <p className={styleJordan.Parcelamento}>10x R$ 159,99</p>
        </div>

        <div className={styleJordan.ContainerCard}>
          <img className={styleJordan.imagemCard} src={Tenis11} alt="" />
          <h1 className={styleJordan.Nome}>AIR JORDAN 11 RETRO</h1>
          <h2 className={styleJordan.Preco}>R$ 1.199,99</h2>
          <p className={styleJordan.Parcelamento}>10x R$ 119,99</p>
        </div>

        <div className={styleJordan.ContainerCard}>
          <img className={styleJordan.imagemCard} src={Tenis12} alt="" />
          <h1 className={styleJordan.Nome}>JORDAN LUKA 1 NEXT NATURE </h1>
          <h2 className={styleJordan.Preco}>R$ 739,99</h2>
          <p className={styleJordan.Parcelamento}>10x R$ 73,99</p>
        </div>
      </div>



      <div className={styleJordan.Container}>
        <div className={styleJordan.ContainerCard}>
          <img className={styleJordan.imagemCard} src={Tenis13} alt="" />
          <h1 className={styleJordan.Nome}>AIR JORDAN LEGACY 312 LOW</h1>
          <h2 className={styleJordan.Preco}>R$ 1399,99</h2>
          <p className={styleJordan.Parcelamento}>10x R$ 139,99</p>
        </div>

        <div className={styleJordan.ContainerCard}>
          <img className={styleJordan.imagemCard} src={Tenis14} alt="" />
          <h1 className={styleJordan.Nome}>AIR JORDAN 11 RETRO</h1>
          <h2 className={styleJordan.Preco}>R$ 1.199,99</h2>
          <p className={styleJordan.Parcelamento}>10x R$ 119,99</p>
        </div>

        <div className={styleJordan.ContainerCard}>
          <img className={styleJordan.imagemCard} src={Tenis15} alt="" />
          <h1 className={styleJordan.Nome}>AIR JORDAN 2 RETRO LOW </h1>
          <h2 className={styleJordan.Preco}>R$ 1199,99</h2>
          <p className={styleJordan.Parcelamento}>10x R$ 119,99</p>
        </div>
      </div>

      <div className={styleJordan.Container}>
        <div className={styleJordan.ContainerCard}>
          <img className={styleJordan.imagemCard} src={Tenis16} alt="" />
          <h1 className={styleJordan.Nome}>Air Jordan 4 Retro PSG </h1>
          <h2 className={styleJordan.Preco}>R$ 749,99</h2>
          <p className={styleJordan.Parcelamento}>4X R$ 187,47</p>
        </div>

        <div className={styleJordan.ContainerCard}>
          <img className={styleJordan.imagemCard} src={Tenis17} alt="" />
          <h1 className={styleJordan.Nome}>JORDAN SPIZIKE LOW CNY</h1>
          <h2 className={styleJordan.Preco}>R$ 1.299,99</h2>
          <p className={styleJordan.Parcelamento}>10x R$ 129,99</p>
        </div>

        <div className={styleJordan.ContainerCard}>
          <img className={styleJordan.imagemCard} src={Tenis18} alt="" />
          <h1 className={styleJordan.Nome}>JORDAN DOGGFATHER </h1>
          <h2 className={styleJordan.Preco}>R$ 739,99</h2>
          <p className={styleJordan.Parcelamento}>10x R$ 73,99</p>
        </div>
      </div>

      <h3 className={styleJordan.TituloVisualizados}>{textoVisualizacao}</h3>
      <button onClick={mostrarCards} className={styleJordan.VerMais}>{textoBtn} </button>
      <p>{renderizar}</p>
    </>
  );
}
