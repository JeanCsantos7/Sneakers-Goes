import NavBarV2 from "../components/Home/NavBar v2";
import styleFeminino from "../components/styles/Feminino.module.css";
import Tenis1 from "../components/assets/TÊNIS NIKE DUNK LOW FEMININO.webp";
import Tenis2 from "../components/assets/TÊNIS NEW BALANCE CT302 FEMININO.webp";
import Tenis3 from "../components/assets/TÊNIS v23 ADIDAS OZWEEGO FEMININOs.webp";
import Tenis4 from "../components/assets/TÊNIS ADIDAS HANDBALL SPEZIAL W FEMININO.webp";
import Tenis5 from "../components/assets/TÊNIS AIR JORDAN 1 FEMININO.webp";
import Tenis6 from "../components/assets/TÊNIS NIKE W AIR MAX 90 SE FEMININO.webp";
import Tenis7 from "../components/assets/TÊNIS VB ADIDAS RETROPY F90 FEMININO.webp";
import Tenis8 from "../components/assets/TÊNIS NIKE AIR FORCE 1 SHADOW FEMININO.webp";
import Tenis9 from "../components/assets/TÊNIS NIKE AIR MAX 97 SE FEMININO.webp";
import Tenis10 from "../components/assets/TÊNIS AIR JORDAN 4 RETRO FEMININO.webp";
import Tenis11 from "../components/assets/TÊNIS ADIDAS NIZZA TREK FEMININO.webp";
import Tenis12 from "../components/assets/TÊNIS NIKE AIR MAX PLUS FEMININO.webp";

export default function Feminino() {
  return (
    <>
      <NavBarV2></NavBarV2>

      <h1 className={styleFeminino.Titulo}>Linha Feminina</h1>
      <p className={styleFeminino.Informacoes}>
        Bem-vinda à nossa categoria de tênis feminino! Explore agora e eleve o
        seu hype a novos patamares.
      </p>

      <div className={styleFeminino.Container}>
        <div className={styleFeminino.ContainerCard}>
          <img className={styleFeminino.imagemCard} src={Tenis1} alt="" />
          <h1 className={styleFeminino.Nome}>NIKE DUNK LOW</h1>
          <h2 className={styleFeminino.Preco}>R$ 899,99</h2>
          <p className={styleFeminino.Parcelamento}>10x R$ 89,99</p>
        </div>

        <div className={styleFeminino.ContainerCard}>
          <img className={styleFeminino.imagemCard} src={Tenis2} alt="" />
          <h1 className={styleFeminino.Nome}>NEW BALANCE CT302 </h1>
          <h2 className={styleFeminino.Preco}>R$ 499,99</h2>
          <p className={styleFeminino.Parcelamento}>10x R$ 49,99</p>
        </div>

        <div className={styleFeminino.ContainerCard}>
          <img className={styleFeminino.imagemCard} src={Tenis3} alt="" />
          <h1 className={styleFeminino.Nome}>ADIDAS OZWEEGO</h1>
          <h2 className={styleFeminino.Preco}>R$ 499,99</h2>
          <p className={styleFeminino.Parcelamento}>10x R$ 49,99</p>
        </div>
      </div>

      <div className={styleFeminino.Container}>
        <div className={styleFeminino.ContainerCard}>
          <img className={styleFeminino.imagemCard} src={Tenis4} alt="" />
          <h1 className={styleFeminino.Nome}>ADIDAS HANDBALL SPEZIAL W </h1>
          <h2 className={styleFeminino.Preco}>R$ 699,99</h2>
          <p className={styleFeminino.Parcelamento}>10x R$ 69,99</p>
        </div>

        <div className={styleFeminino.ContainerCard}>
          <img className={styleFeminino.imagemCard} src={Tenis5} alt="" />
          <h1 className={styleFeminino.Nome}>AIR JORDAN 1 </h1>
          <h2 className={styleFeminino.Preco}>R$ 1099,99</h2>
          <p className={styleFeminino.Parcelamento}>10x R$ 109,99</p>
        </div>

        <div className={styleFeminino.ContainerCard}>
          <img className={styleFeminino.imagemCard} src={Tenis6} alt="" />
          <h1 className={styleFeminino.Nome}>NIKE W AIR MAX 90 SE</h1>
          <h2 className={styleFeminino.Preco}>R$ 899,99</h2>
          <p className={styleFeminino.Parcelamento}>10x R$ 89,99</p>
        </div>
      </div>

      <div className={styleFeminino.Container}>
        <div className={styleFeminino.ContainerCard}>
          <img className={styleFeminino.imagemCard} src={Tenis7} alt="" />
          <h1 className={styleFeminino.Nome}>ADIDAS RETROPY F90</h1>
          <h2 className={styleFeminino.Preco}>R$ 479,99</h2>
          <p className={styleFeminino.Parcelamento}>10x R$ 47,99</p>
        </div>

        <div className={styleFeminino.ContainerCard}>
          <img className={styleFeminino.imagemCard} src={Tenis8} alt="" />
          <h1 className={styleFeminino.Nome}>NIKE AIR FORCE 1 SHADOW </h1>
          <h2 className={styleFeminino.Preco}>R$ 849,99</h2>
          <p className={styleFeminino.Parcelamento}>10x R$ 84,99</p>
        </div>

        <div className={styleFeminino.ContainerCard}>
          <img className={styleFeminino.imagemCard} src={Tenis9} alt="" />
          <h1 className={styleFeminino.Nome}>NIKE AIR MAX 97 SE</h1>
          <h2 className={styleFeminino.Preco}>R$ 1099,99</h2>
          <p className={styleFeminino.Parcelamento}>10x R$ 109,99</p>
        </div>
      </div>

      <div className={styleFeminino.Container}>
        <div className={styleFeminino.ContainerCard}>
          <img className={styleFeminino.imagemCard} src={Tenis10} alt="" />
          <h1 className={styleFeminino.Nome}>AIR JORDAN 4 RETRO </h1>
          <h2 className={styleFeminino.Preco}>R$ 1699,99</h2>
          <p className={styleFeminino.Parcelamento}>10x R$ 169,99</p>
        </div>

        <div className={styleFeminino.ContainerCard}>
          <img className={styleFeminino.imagemCard} src={Tenis11} alt="" />
          <h1 className={styleFeminino.Nome}>ADIDAS NIZZA TREK </h1>
          <h2 className={styleFeminino.Preco}>R$ 349,99</h2>
          <p className={styleFeminino.Parcelamento}>10x R$ 34,99</p>
        </div>

        <div className={styleFeminino.ContainerCard}>
          <img className={styleFeminino.imagemCard} src={Tenis12} alt="" />
          <h1 className={styleFeminino.Nome}>NIKE AIR MAX PLUS</h1>
          <h2 className={styleFeminino.Preco}>R$ 899,99</h2>
          <p className={styleFeminino.Parcelamento}>10x R$ 89,99</p>
        </div>
      </div>
    </>
  );
}
