import styleBeneficios from "../styles/Beneficios.module.css";
import { FaTruckFast } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { FaCalendarDays } from "react-icons/fa6";

export default function Beneficios() {
  return (
    <>
      <div className={styleBeneficios.Container}>
        <span className={styleBeneficios.ContainerInfo}>
          <FaTruckFast className={styleBeneficios.Icones} />
          <h1 className={styleBeneficios.Titulo}> FRETE GRÁTIS </h1>
        </span>

        <span className={styleBeneficios.ContainerInfo}>
          <FaCalendarDays className={styleBeneficios.Icones} />
          <h1 className={styleBeneficios.Titulo}> 30 DIAS PRA TROCA </h1>
        </span>

        <span className={styleBeneficios.ContainerInfo}>
          <BiSolidOffer className={styleBeneficios.Icones} />

          <h1 className={styleBeneficios.Titulo}> DESCONTO VIA PIX </h1>
        </span>
      </div>
    </>
  );
}
