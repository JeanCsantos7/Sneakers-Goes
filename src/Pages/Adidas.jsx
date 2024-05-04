import NavBarV2 from "../components/Home/NavBar v2";
import OutrosCards from "../components/Adidas/OutrosCards";
import { useState } from "react";
import styleAdidas from "../components/styles/Adidas.module.css";
import Tenis1 from "../components/assets/HANDBALL SPEZIAL MASCULINO.webp";
import Tenis2 from "../components/assets/TÊNIS ADIDAS HANDBALL SPEZIAL MASCULINO.webp";
import Tenis3 from "../components/assets/TÊNIS ADIDAS SUPERSTAR MASCULINO.webp";
import Tenis4 from "../components/assets/TÊNIS ADIDAS STAN SMITH MASCULINO.webp";
import Tenis5 from "../components/assets/TÊNIS ADIDAS CAMPUS 00S MASCULINO.webp";
import Tenis6 from "../components/assets/TÊNIS ADIDAS CAMPUS 00S UNISSEX.webp";
import Tenis7 from "../components/assets/ADIDAS CAMPUS 00S PINK.webp";
import Tenis8 from "../components/assets/TÊNIS ADIDAS ADI2000 UNISSEX.webp";
import Tenis9 from "../components/assets/TÊNIS ADIDAS SAMBA OG UNISSEX.webp";


export default function Adidas() {
 
  const[toggle, setToggle] = useState(true)
  const[renderizar, setRenderizar] = useState('')
  const[textoBtn, setTexto] = useState('Ver Mais')
  const[textoVisualizacao, setTextoVisualizacao] = useState('Você viu 9 de 24 produtos')
  
  function mostrarCards()
  {

    setToggle(!toggle)
    setRenderizar(toggle ? <OutrosCards/> : '')
    setTexto(toggle ? 'Ver Menos'  :  'Ver Mais')
    setTextoVisualizacao(toggle ? 'Você viu 24 de 24 produtos'  :  'Você viu 9 de 24 produtos')
  }


  return (
    <>
      <NavBarV2></NavBarV2>
      

      <h1 className={styleAdidas.Titulo}>Adidas</h1>

      <p className={styleAdidas.Informacoes}>
        Bem-vindo à nossa categoria da Adidas! Como verdadeiros
        sneakerheads, sabemos que um bom par de tênis é um símbolo de
        identidade, vem conferir.
      </p>

      <h2 className={styleAdidas.TituloQuantia}>24 produtos</h2>

      <div className={styleAdidas.Container}>

        <div className={styleAdidas.ContainerCard}>

          <img className={styleAdidas.imagemCard} src={Tenis1} alt="" />
          <h1 className={styleAdidas.Nome}>ADIDAS HANDBALL SPEZIAL</h1>
          <h2 className={styleAdidas.Preco}>R$ 499,99</h2>
          <p className={styleAdidas.Parcelamento}>10x R$ 49,99</p>

        </div>

        <div className={styleAdidas.ContainerCard}>

          <img className={styleAdidas.imagemCard} src={Tenis2} alt="" />
          <h1 className={styleAdidas.Nome}>ADIDAS HANDBALL SPEZIAL</h1>
          <h2 className={styleAdidas.Preco}>R$ 499,99</h2>
          <p className={styleAdidas.Parcelamento}>10x R$ 49,99</p>

        </div>

        <div className={styleAdidas.ContainerCard}>

          <img className={styleAdidas.imagemCard} src={Tenis3} alt="" />
          <h1 className={styleAdidas.Nome}>ADIDAS SUPERSTAR</h1>
          <h2 className={styleAdidas.Preco}>R$ 350,00</h2>
          <p className={styleAdidas.Parcelamento}>8X R$ 43,75</p>

        </div>

      </div>


      <div className={styleAdidas.Container}>

        <div className={styleAdidas.ContainerCard}>

          <img className={styleAdidas.imagemCard} src={Tenis4} alt="" />
          <h1 className={styleAdidas.Nome}>ADIDAS STAN SMITH</h1>
          <h2 className={styleAdidas.Preco}>R$ 379,99</h2>
          <p className={styleAdidas.Parcelamento}>9x R$ 42,22</p>

        </div>

        <div className={styleAdidas.ContainerCard}>

          <img className={styleAdidas.imagemCard} src={Tenis5} alt="" />
          <h1 className={styleAdidas.Nome}>ADIDAS CAMPUS 00S</h1>
          <h2 className={styleAdidas.Preco}>R$ 699,999</h2>
          <p className={styleAdidas.Parcelamento}>10x R$ 69,99</p>

        </div>

        <div className={styleAdidas.ContainerCard}>

          <img className={styleAdidas.imagemCard} src={Tenis6} alt="" />
          <h1 className={styleAdidas.Nome}>ADIDAS CAMPUS 00S</h1>
          <h2 className={styleAdidas.Preco}>R$ 699,999</h2>
          <p className={styleAdidas.Parcelamento}>10x R$ 69,99</p>
          
        </div>

      </div>


      <div className={styleAdidas.Container}>

        <div className={styleAdidas.ContainerCard}>

          <img className={styleAdidas.imagemCard} src={Tenis7} alt="" />
          <h1 className={styleAdidas.Nome}>ADIDAS CAMPUS 00S</h1>
          <h2 className={styleAdidas.Preco}>R$ 699,999</h2>
          <p className={styleAdidas.Parcelamento}>10x R$ 69,99</p>

        </div>

        <div className={styleAdidas.ContainerCard}>

          <img className={styleAdidas.imagemCard} src={Tenis8} alt="" />
          <h1 className={styleAdidas.Nome}> ADIDAS ADI2000 </h1>
          <h2 className={styleAdidas.Preco}>R$ 799,999</h2>
          <p className={styleAdidas.Parcelamento}>10x R$ 79,99</p>

        </div>

        <div className={styleAdidas.ContainerCard}>

          <img className={styleAdidas.imagemCard} src={Tenis9} alt="" />
          <h1 className={styleAdidas.Nome}>ADIDAS SAMBA</h1>
          <h2 className={styleAdidas.Preco}>R$ 699,999</h2>
          <p className={styleAdidas.Parcelamento}>10x R$ 69,99</p>
          
        </div>

      </div>


      <h3 className={styleAdidas.TituloVisualizados}>{textoVisualizacao}</h3>
      <button onClick={mostrarCards} className={styleAdidas.VerMais}>{textoBtn} </button>
      <p>{renderizar}</p>

    </>
  );
}
