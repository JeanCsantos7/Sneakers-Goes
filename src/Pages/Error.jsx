import ImagemErro from "../components/assets/ERROR404 V2.jpg";
import styleErro from "../components/styles/Erro.module.css";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <>
      <div className={styleErro.Container}>
        <h1 className={styleErro.Titulo}>
          Desculpe, a página que você está procurando não foi encontrada.
        </h1>
        <img className={styleErro.ImagemError} src={ImagemErro} alt="" />
        <Link className={styleErro.Link} to={"/"}>
          Retornar para a Página Inicial
        </Link>
      </div>
    </>
  );
}
