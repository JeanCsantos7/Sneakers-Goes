import React, { useState } from "react";
import NavBar from "../components/Home/NavBar";
import CarroselImagens from "../components/Home/CarroselImagens";
import Beneficios from "../components/Home/Beneficios";
import Destaques from "../components/Home/Destaques";
import Marcas from "../components/Home/Marcas";
import Drop from "../components/Home/Drop";
import Lojas from "../components/Home/Lojas";
import InputValue from "../components/Home/InputValue";
import Footer from "../components/Home/Footer";

export default function Home() {
  const [prop, setProp] = useState("");
  const [prop2, setProp2] = useState("");
  const [cliqueCompras, setCliqueCompras] = useState(0);

  function ReceberDados(dados) {
    setProp(dados);
  }

  function ReceberDados2(dados2) {
    setProp2(dados2);
  }

  function Cliques() {
    setCliqueCompras(cliqueCompras + 1);
  }

  return (
    <>
      <NavBar termoPesquisa={ReceberDados} numeroCliques={cliqueCompras} />
      <CarroselImagens />
      <Beneficios />
      <Destaques filtrarTermo={prop} numeroCliques={Cliques} />
      <Marcas />
      <Drop filtrarTermo={prop} numeroCliques={Cliques} />
      <InputValue termoPesquisa={ReceberDados2} />
      <Lojas filtrarTermo={prop2} />
      <Footer />
    </>
  );
}
