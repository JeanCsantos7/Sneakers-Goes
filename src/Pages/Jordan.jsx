import Navbar from "../components/Home/NavBar";
import styleJordan from "../components/styles/Jordan.module.css"

export default function Jordan() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className={styleJordan.Titulo}>Jordan</h1>

      <p className={styleJordan.Informacoes}>
        Bem-vindo à nossa categoria  Jordan! Como verdadeiros sneakerheads,
        sabemos que um bom par de tênis é um símbolo de identidade, vem
        conferir.
      </p>

      <h2 className={styleJordan.TituloQuantia}>30 produtos</h2>



    </>
  );
}
