import NavBarV2 from "../components/Home/NavBar v2";
import styleInfantil from "../components/styles/Infantil.module.css";
import Tenis1 from "../components/assets/TÊNIS AIR JORDAN 1 LOW GS INFANTIL.webp";
import Tenis2 from "../components/assets/TÊNIS NEW BALANCE 550 PS INFANTIL.webp";
import Tenis3 from "../components/assets/TÊNIS NIKE AIR MAX 1 GS INFANTIL.webp";
import Tenis4 from "../components/assets/TÊNIS ADIDAS RUNFALCON 3.0 TD INFANTIL.webp";
import Tenis5 from "../components/assets/TÊNIS ADIDAS FORUM LOW PS INFANTIL.webp";
import Tenis6 from "../components/assets/TÊNIS JORDAN 1 MID SE BG GS INFANTIL.webp";
import Tenis7 from "../components/assets/TÊNIS NIKE DUNK LOW GS INFANTIL.webp";
import Tenis8 from "../components/assets/TÊNIS VANS SK8-HI ZIP TD INFANTIL.webp";
import Tenis9 from "../components/assets/TÊNIS ADIDAS TENSAUR SPORT 2.0 TD INFANTIL.webp";
import Tenis10 from "../components/assets/DUNK CRIANÇA.webp";
import Tenis11 from "../components/assets/TÊNIS ADIDAS SUPERSTAR 360 TD INFANTIL.webp";
import Tenis12 from "../components/assets/TÊNIS CONVERSE CHUCK TAYLOR ALL STAR VELCRO TD INFANTIL.webp";

export default function Infantil() {
  return (
    <>
      <NavBarV2></NavBarV2>
      <h1 className={styleInfantil.Titulo}>Linha Infantil</h1>

      <p className={styleInfantil.Informacoes}>
        Bem-vinda à nossa categoria de tênis Infantil! Explore agora e eleve o
        seu hype a novos patamares.
      </p>

      <div className={styleInfantil.Container}>
        <div className={styleInfantil.ContainerCard}>
          <img className={styleInfantil.imagemCard} src={Tenis1} alt="" />
          <h1 className={styleInfantil.Nome}>AIR JORDAN 1 LOW</h1>
          <h2 className={styleInfantil.Preco}>R$ 699,99</h2>
          <p className={styleInfantil.Parcelamento}>10x R$ 69,99</p>
        </div>

        <div className={styleInfantil.ContainerCard}>
          <img className={styleInfantil.imagemCard} src={Tenis2} alt="" />
          <h1 className={styleInfantil.Nome}>NEW BALANCE 550 PS</h1>
          <h2 className={styleInfantil.Preco}>R$ 449,99</h2>
          <p className={styleInfantil.Parcelamento}>10x R$ 44,99</p>
        </div>

        <div className={styleInfantil.ContainerCard}>
          <img className={styleInfantil.imagemCard} src={Tenis3} alt="" />
          <h1 className={styleInfantil.Nome}>NIKE AIR MAX 1 GS</h1>
          <h2 className={styleInfantil.Preco}>R$ 899,99</h2>
          <p className={styleInfantil.Parcelamento}>10x R$ 89,99</p>
        </div>
      </div>

      <div className={styleInfantil.Container}>
        <div className={styleInfantil.ContainerCard}>
          <img className={styleInfantil.imagemCard} src={Tenis4} alt="" />
          <h1 className={styleInfantil.Nome}>ADIDAS RUNFALCON 3.0 TDW</h1>
          <h2 className={styleInfantil.Preco}>R$ 249,99</h2>
          <p className={styleInfantil.Parcelamento}>6x R$ 41,66</p>
        </div>

        <div className={styleInfantil.ContainerCard}>
          <img className={styleInfantil.imagemCard} src={Tenis5} alt="" />
          <h1 className={styleInfantil.Nome}>ADIDAS FORUM LOW PS</h1>
          <h2 className={styleInfantil.Preco}>R$ 449,99</h2>
          <p className={styleInfantil.Parcelamento}>10x R$ 44,99</p>
        </div>

        <div className={styleInfantil.ContainerCard}>
          <img className={styleInfantil.imagemCard} src={Tenis6} alt="" />
          <h1 className={styleInfantil.Nome}>JORDAN 1 MID SE BG GS</h1>
          <h2 className={styleInfantil.Preco}>R$ 1199,99</h2>
          <p className={styleInfantil.Parcelamento}>10x R$ 119,99</p>
        </div>
      </div>

      <div className={styleInfantil.Container}>
        <div className={styleInfantil.ContainerCard}>
          <img className={styleInfantil.imagemCard} src={Tenis7} alt="" />
          <h1 className={styleInfantil.Nome}>NIKE DUNK LOW GSW</h1>
          <h2 className={styleInfantil.Preco}>R$ 699,99</h2>
          <p className={styleInfantil.Parcelamento}>10x R$ 69,99</p>
        </div>

        <div className={styleInfantil.ContainerCard}>
          <img className={styleInfantil.imagemCard} src={Tenis8} alt="" />
          <h1 className={styleInfantil.Nome}>VANS SK8-HI ZIP TD</h1>
          <h2 className={styleInfantil.Preco}>R$ 349,99</h2>
          <p className={styleInfantil.Parcelamento}>8x R$ 43,74</p>
        </div>

        <div className={styleInfantil.ContainerCard}>
          <img className={styleInfantil.imagemCard} src={Tenis9} alt="" />
          <h1 className={styleInfantil.Nome}>ADIDAS TENSAUR SPORT 2.0</h1>
          <h2 className={styleInfantil.Preco}>R$ 279,99</h2>
          <p className={styleInfantil.Parcelamento}>7x R$ 39,99</p>
        </div>
      </div>

      <div className={styleInfantil.Container}>
        <div className={styleInfantil.ContainerCard}>
          <img className={styleInfantil.imagemCard} src={Tenis10} alt="" />
          <h1 className={styleInfantil.Nome}>NIKE DUNK LOW SE GS</h1>
          <h2 className={styleInfantil.Preco}>R$ 699,99</h2>
          <p className={styleInfantil.Parcelamento}>10x R$ 69,99</p>
        </div>

        <div className={styleInfantil.ContainerCard}>
          <img className={styleInfantil.imagemCard} src={Tenis11} alt="" />
          <h1 className={styleInfantil.Nome}>ADIDAS SUPERSTAR 360 TD</h1>
          <h2 className={styleInfantil.Preco}>R$ 259,99</h2>
          <p className={styleInfantil.Parcelamento}>6x R$ 43,33</p>
        </div>

        <div className={styleInfantil.ContainerCard}>
          <img className={styleInfantil.imagemCard} src={Tenis12} alt="" />
          <h1 className={styleInfantil.Nome}>
            {" "}
            CONVERSE CHUCK TAYLOR ALL STAR VELCRO TD{" "}
          </h1>
          <h2 className={styleInfantil.Preco}>R$ 209,99</h2>
          <p className={styleInfantil.Parcelamento}>5x R$ 41,99</p>
        </div>
      </div>
    </>
  );
}
