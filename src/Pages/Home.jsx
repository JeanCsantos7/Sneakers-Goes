import NavBar from "../components/Home/NavBar";
import CarroselImagens from "../components/Home/CarroselImagens";
import Beneficios from "../components/Home/Beneficios";
import Destaques from "../components/Home/Destaques";
import Marcas from "../components/Home/Marcas";
import Drop from "../components/Home/Drop";
import Lojas from "../components/Home/Lojas";
import InputValue from "../components/Home/InputValue";
import { useState } from "react";
import Footer from "../components/Home/Footer";


export default function Home() {
  const [prop, setProp] = useState("");
  const [prop2, setProp2] = useState("");

  function ReceberDados(dados) {
    setProp(dados);
  }

  function ReceberDados2(dados2) {
    setProp2(dados2);
  }

  return (
    <>
      <NavBar termoPesquisa={ReceberDados}></NavBar>

      <CarroselImagens></CarroselImagens>
      <Beneficios></Beneficios>
      <Destaques filtrarTermo={prop}></Destaques>
      <Marcas></Marcas>
      <Drop filtrarTermo={prop}></Drop>
      <InputValue termoPesquisa={ReceberDados2}></InputValue>
      <Lojas filtrarTermo={prop2}></Lojas>
      <Footer></Footer>
    
    </>
  );
}
