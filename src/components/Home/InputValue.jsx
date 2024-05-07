import { FaSearch } from "react-icons/fa";
import styleInput from "../styles/InputValue.module.css";

export default function InputValue({ termoPesquisa }) {
  function pegarValor(e) {
    const valorDigitado = e.target.value;
    termoPesquisa(valorDigitado);
  }
  return (
    <>
      <div className={styleInput.Container}>
        <h1 className={styleInput.Titulo}>Nossas Lojas</h1>
        <div className={styleInput.Container2}>
          <input
            onBlur={pegarValor}
            className={styleInput.input}
            type="text"
            placeholder="Encontre uma loja"
          />
          <button className={styleInput.btn}>
            <FaSearch></FaSearch>
          </button>
        </div>
      </div>
    </>
  );
}
