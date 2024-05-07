import NavBar2 from "../components/Home/NavBar v2";
import styleMasculino from "../components/styles/Masculino.module.css";
import Tenis1 from "../components/assets/TÊNIS ADIDAS CRAZY 8 MASCULINO.webp";
import Tenis2 from "../components/assets/TÊNIS PUMA RS-X ELEVATED HIKE MASCULINO.webp";
import Tenis3 from "../components/assets/TÊNIS ADIDAS TRAE YOUNG 3 MASCULINO.webp";
import Tenis4 from "../components/assets/TÊNIS JORDAN TATUM 2 MASCULINO.webp";
import Tenis5 from "../components/assets/JORDAN 6.webp";
import Tenis6 from "../components/assets/TÊNIS NIKE LEBRON XX NRG MASCULINO.webp";
import Tenis7 from "../components/assets/TÊNIS ADIDAS CRAZY 1 MASCULINO.webp";
import Tenis8 from "../components/assets/TÊNIS AIR JORDAN 1 MID SE CRAFT.webp";
import Tenis9 from "../components/assets/TÊNIS ADIDAS FORUM MOD LOW MASCULINO.webp";
import Tenis10 from "../components/assets/TÊNIS MIZUNO WAVE PROPHECY LOVE MASCULINO.webp";
import Tenis11 from "../components/assets/TÊNIS V2 NIKE AIR MAX 90 GTX MASCULINO.webp";
import Tenis12 from "../components/assets/TÊNIS JACK NIKE AIR MAX TW 1 MASCULINO.webp";

export default function Masculino() {
  return (
    <>
      <NavBar2></NavBar2>

      <h1 className={styleMasculino.Titulo}>Linha Masculina</h1>

      <p className={styleMasculino.Informacoes}>
        Bem-vinda à nossa categoria de tênis Masculinos! Explore agora e eleve o
        seu hype a novos patamares.
      </p>

      <div className={styleMasculino.Container}>
        <div className={styleMasculino.ContainerCard}>
          <img className={styleMasculino.imagemCard} src={Tenis1} alt="" />
          <h1 className={styleMasculino.Nome}>ADIDAS CRAZY 8 </h1>
          <h2 className={styleMasculino.Preco}>R$ 1199,99</h2>
          <p className={styleMasculino.Parcelamento}>10x R$ 119,99</p>
        </div>

        <div className={styleMasculino.ContainerCard}>
          <img className={styleMasculino.imagemCard} src={Tenis2} alt="" />
          <h1 className={styleMasculino.Nome}>PUMA RS-X ELEVATED HIKE</h1>
          <h2 className={styleMasculino.Preco}>R$ 499,99</h2>
          <p className={styleMasculino.Parcelamento}>10x R$ 49,99</p>
        </div>

        <div className={styleMasculino.ContainerCard}>
          <img className={styleMasculino.imagemCard} src={Tenis3} alt="" />
          <h1 className={styleMasculino.Nome}>ADIDAS TRAE YOUNG 3 </h1>
          <h2 className={styleMasculino.Preco}>R$ 1399,99</h2>
          <p className={styleMasculino.Parcelamento}>10x R$ 139,99</p>
        </div>
      </div>

      <div className={styleMasculino.Container}>
        <div className={styleMasculino.ContainerCard}>
          <img className={styleMasculino.imagemCard} src={Tenis4} alt="" />
          <h1 className={styleMasculino.Nome}>JORDAN TATUM 2</h1>
          <h2 className={styleMasculino.Preco}>R$ 1199,99</h2>
          <p className={styleMasculino.Parcelamento}>10x R$ 119,99</p>
        </div>

        <div className={styleMasculino.ContainerCard}>
          <img className={styleMasculino.imagemCard} src={Tenis5} alt="" />
          <h1 className={styleMasculino.Nome}>AIR JORDAN 6</h1>
          <h2 className={styleMasculino.Preco}>R$ 1299,99</h2>
          <p className={styleMasculino.Parcelamento}>10x R$ 129,99</p>
        </div>

        <div className={styleMasculino.ContainerCard}>
          <img className={styleMasculino.imagemCard} src={Tenis6} alt="" />
          <h1 className={styleMasculino.Nome}>NIKE LEBRON XX NRG </h1>
          <h2 className={styleMasculino.Preco}>R$ 1299,99</h2>
          <p className={styleMasculino.Parcelamento}>10x R$ 129,99</p>
        </div>
      </div>

      <div className={styleMasculino.Container}>
        <div className={styleMasculino.ContainerCard}>
          <img className={styleMasculino.imagemCard} src={Tenis7} alt="" />
          <h1 className={styleMasculino.Nome}>ADIDAS CRAZY 1</h1>
          <h2 className={styleMasculino.Preco}>R$ 849,99</h2>
          <p className={styleMasculino.Parcelamento}>10x R$ 84,99</p>
        </div>

        <div className={styleMasculino.ContainerCard}>
          <img className={styleMasculino.imagemCard} src={Tenis8} alt="" />
          <h1 className={styleMasculino.Nome}>AIR JORDAN 1 MID SE CRAFT</h1>
          <h2 className={styleMasculino.Preco}>R$ 899,99</h2>
          <p className={styleMasculino.Parcelamento}>10x R$ 89,99</p>
        </div>

        <div className={styleMasculino.ContainerCard}>
          <img className={styleMasculino.imagemCard} src={Tenis9} alt="" />
          <h1 className={styleMasculino.Nome}>ADIDAS FORUM MOD LOW </h1>
          <h2 className={styleMasculino.Preco}>R$ 799,99</h2>
          <p className={styleMasculino.Parcelamento}>10x R$ 79,99</p>
        </div>
      </div>

      <div className={styleMasculino.Container}>
        <div className={styleMasculino.ContainerCard}>
          <img className={styleMasculino.imagemCard} src={Tenis10} alt="" />
          <h1 className={styleMasculino.Nome}>MIZUNO WAVE PROPHECY LOVE</h1>
          <h2 className={styleMasculino.Preco}>R$ 1799,99</h2>
          <p className={styleMasculino.Parcelamento}>10x R$ 179,99</p>
        </div>

        <div className={styleMasculino.ContainerCard}>
          <img className={styleMasculino.imagemCard} src={Tenis11} alt="" />
          <h1 className={styleMasculino.Nome}>NIKE AIR MAX 90 GTX</h1>
          <h2 className={styleMasculino.Preco}>R$ 749,99</h2>
          <p className={styleMasculino.Parcelamento}>10x R$ 74,99</p>
        </div>

        <div className={styleMasculino.ContainerCard}>
          <img className={styleMasculino.imagemCard} src={Tenis12} alt="" />
          <h1 className={styleMasculino.Nome}>NIKE AIR MAX TW 1 </h1>
          <h2 className={styleMasculino.Preco}>R$ 949,99</h2>
          <p className={styleMasculino.Parcelamento}>10x R$ 99,99</p>
        </div>
      </div>
    </>
  );
}
