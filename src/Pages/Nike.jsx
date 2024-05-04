import NavBarV2 from "../components/Home/NavBar v2";
import styleNike from "../components/styles/Nike.module.css";
import OutrosCardsNike from "../components/Nike/OutrosCardsNike";
import { useState } from "react";
import Tenis1 from "../components/assets/TÊNIS NIKE LEBRON XXI UNISSEX.webp";
import Tenis2 from "../components/assets/TÊNIS NIKE AIR MAX PLUS MASCULINO.webp";
import Tenis3 from "../components/assets/TÊNIS NIKE AIR MAX 97 FUTURA FEMININO.webp";
import Tenis4 from "../components/assets/TÊNIS NIKE DUNK LOW RETRO MASCULINO.webp";
import Tenis5 from "../components/assets/TÊNIS NIKE AIR FORCE 1 LV8 5 BG INFANTIL.webp";
import Tenis6 from "../components/assets/TÊNIS NIKE AIR MAX TERRASCAPE PLUS MASCULINO.webp";
import Tenis7 from "../components/assets/TÊNIS NIKE DUNK LOW ESS FEMININO.webp";
import Tenis8 from "../components/assets/TÊNIS NIKE AIR MAX TW MASCULINO.webp";
import Tenis9 from "../components/assets/TÊNIS NIKE AIR MAX 1 NCPS MASCULINO.webp";
import Tenis10 from "../components/assets/TÊNIS NIKE AIR MAX PLUS SE MASCULINO.webp";
import Tenis11 from "../components/assets/TÊNIS NIKE ZOOM FREAK 5 MASCULINO.webp";
import Tenis12 from "../components/assets/TÊNIS NIKE AIR FORCE 1 ´07 LV8 FEMININO.webp";
import Tenis13 from "../components/assets/TÊNIS NIKE LEBRON NXTT GEN.webp";
import Tenis14 from "../components/assets/TÊNIS NIKE AIR FORCE 1 '07 MID LV8 MASCULINO.webp";
import Tenis15 from "../components/assets/TÊNIS NIKE AIR MAX 90 GTX MASCULINO.webp";

export default function Nike() {
  const [toggle, setToggle] = useState(true);
  const [renderizar, setRenderizar] = useState("");
  const [textoBtn, setTexto] = useState("Ver Mais");
  const [textoVisualizacao, setTextoVisualizacao] = useState(
    "Você viu 15 de 30 produtos"
  );

  function mostrarCards() {
    setToggle(!toggle);
    setRenderizar(toggle ? <OutrosCardsNike /> : "");
    setTexto(toggle ? "Ver Menos" : "Ver Mais");
    setTextoVisualizacao(
      toggle ? "Você viu 30 de 30 produtos" : "Você viu 15 de 30 produtos"
    );
  }

  return (
    <>
     <NavBarV2></NavBarV2>

      <h1 className={styleNike.Titulo}>Nike</h1>

      <p className={styleNike.Informacoes}>
        Bem-vindo à nossa categoria da Nike! Como verdadeiros sneakerheads,
        sabemos que um bom par de tênis é um símbolo de identidade, vem
        conferir.
      </p>

      <h2 className={styleNike.TituloQuantia}>30 produtos</h2>

      <div className={styleNike.Container}>
        <div className={styleNike.ContainerCard}>
          <img className={styleNike.imagemCard} src={Tenis1} alt="" />
          <h1 className={styleNike.Nome}>NIKE LEBRON XXI</h1>
          <h2 className={styleNike.Preco}>R$ 1.799,99</h2>
          <p className={styleNike.Parcelamento}>10x R$ 179,99</p>
        </div>

        <div className={styleNike.ContainerCard}>
          <img className={styleNike.imagemCard} src={Tenis2} alt="" />
          <h1 className={styleNike.Nome}>NIKE AIR MAX TN PLUS</h1>
          <h2 className={styleNike.Preco}>R$ 1299,99</h2>
          <p className={styleNike.Parcelamento}>10x R$ 129,99</p>
        </div>

        <div className={styleNike.ContainerCard}>
          <img className={styleNike.imagemCard} src={Tenis3} alt="" />
          <h1 className={styleNike.Nome}>NIKE AIR MAX 97 FUTURA</h1>
          <h2 className={styleNike.Preco}>R$ 1499,00</h2>
          <p className={styleNike.Parcelamento}>10X R$ 149,99</p>
        </div>
      </div>

      <div className={styleNike.Container}>
        <div className={styleNike.ContainerCard}>
          <img className={styleNike.imagemCard} src={Tenis4} alt="" />
          <h1 className={styleNike.Nome}>NIKE DUNK LOW RETRO</h1>
          <h2 className={styleNike.Preco}>R$ 899,99</h2>
          <p className={styleNike.Parcelamento}>10x R$ 89,99</p>
        </div>

        <div className={styleNike.ContainerCard}>
          <img className={styleNike.imagemCard} src={Tenis5} alt="" />
          <h1 className={styleNike.Nome}>NIKE AIR FORCE 1 LV8 5 BG</h1>
          <h2 className={styleNike.Preco}>R$ 799,99</h2>
          <p className={styleNike.Parcelamento}>10x R$ 79,99</p>
        </div>

        <div className={styleNike.ContainerCard}>
          <img className={styleNike.imagemCard} src={Tenis6} alt="" />
          <h1 className={styleNike.Nome}>NIKE AIR MAX TERRASCAPE PLUS</h1>
          <h2 className={styleNike.Preco}>R$ 999,00</h2>
          <p className={styleNike.Parcelamento}>10X R$ 99,99</p>
        </div>
      </div>

      <div className={styleNike.Container}>
        <div className={styleNike.ContainerCard}>
          <img className={styleNike.imagemCard} src={Tenis7} alt="" />
          <h1 className={styleNike.Nome}>NIKE DUNK LOW ESS</h1>
          <h2 className={styleNike.Preco}>R$ 899,99</h2>
          <p className={styleNike.Parcelamento}>10x R$ 89,99</p>
        </div>

        <div className={styleNike.ContainerCard}>
          <img className={styleNike.imagemCard} src={Tenis8} alt="" />
          <h1 className={styleNike.Nome}>NIKE AIR MAX TW</h1>
          <h2 className={styleNike.Preco}>R$ 899,99</h2>
          <p className={styleNike.Parcelamento}>10x R$ 89,99</p>
        </div>

        <div className={styleNike.ContainerCard}>
          <img className={styleNike.imagemCard} src={Tenis9} alt="" />
          <h1 className={styleNike.Nome}>NIKE AIR MAX 1 NCPS</h1>
          <h2 className={styleNike.Preco}>R$ 1099,99</h2>
          <p className={styleNike.Parcelamento}>10X R$ 109,99</p>
        </div>
      </div>

      <div className={styleNike.Container}>
        <div className={styleNike.ContainerCard}>
          <img className={styleNike.imagemCard} src={Tenis10} alt="" />
          <h1 className={styleNike.Nome}>NIKE DUNK LOW RETRO</h1>
          <h2 className={styleNike.Preco}>R$ 899,99</h2>
          <p className={styleNike.Parcelamento}>10x R$ 89,99</p>
        </div>

        <div className={styleNike.ContainerCard}>
          <img className={styleNike.imagemCard} src={Tenis11} alt="" />
          <h1 className={styleNike.Nome}>NIKE ZOOM FREAK 5</h1>
          <h2 className={styleNike.Preco}>R$ 1.199,99</h2>
          <p className={styleNike.Parcelamento}>10x R$ 119,99</p>
        </div>

        <div className={styleNike.ContainerCard}>
          <img className={styleNike.imagemCard} src={Tenis12} alt="" />
          <h1 className={styleNike.Nome}>NIKE AIR FORCE 1 ´07 LV8</h1>
          <h2 className={styleNike.Preco}>R$ 650,00</h2>
          <p className={styleNike.Parcelamento}>10X R$ 64,99</p>
        </div>
      </div>

      <div className={styleNike.Container}>
        <div className={styleNike.ContainerCard}>
          <img className={styleNike.imagemCard} src={Tenis13} alt="" />
          <h1 className={styleNike.Nome}>NIKE LEBRON NXTT GEN</h1>
          <h2 className={styleNike.Preco}>R$ 879,99</h2>
          <p className={styleNike.Parcelamento}>10x R$ 87,99</p>
        </div>

        <div className={styleNike.ContainerCard}>
          <img className={styleNike.imagemCard} src={Tenis14} alt="" />
          <h1 className={styleNike.Nome}>NIKE AIR FORCE 1 '07 MID LV8</h1>
          <h2 className={styleNike.Preco}>R$ 869,99</h2>
          <p className={styleNike.Parcelamento}>10x R$ 86,99</p>
        </div>

        <div className={styleNike.ContainerCard}>
          <img className={styleNike.imagemCard} src={Tenis15} alt="" />
          <h1 className={styleNike.Nome}>
            TÊNIS NIKE AIR MAX 90 GTX MASCULINO
          </h1>
          <h2 className={styleNike.Preco}>R$ 899,99</h2>
          <p className={styleNike.Parcelamento}>10X R$ 89,99</p>
        </div>
      </div>

      <h3 className={styleNike.TituloVisualizados}>{textoVisualizacao}</h3>
      <button onClick={mostrarCards} className={styleNike.VerMais}>{textoBtn}</button>
      <p>{renderizar}</p>
    </>
  );
}
