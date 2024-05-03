import MensagemErro from "./MensagemErro";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import styleDestaques from "../styles/Destaques.module.css";
import DunkMichigan from "../assets/DUNK MICHIGAN.jpg";
import AJ4pinegreen from "../assets/Air jordan 4 pine green.jpg";
import AJ13courtpurple from "../assets/Air jordan 13 Court purple.jpg";
import ForumLow from "../assets/Adidas Forum Low.jfif";
import Yeezy700 from "../assets/Yeezy 700.webp";
import Yeezy500 from "../assets/Yeezy 500 Blush.webp";
import BapestaPink from "../assets/BAPESTA PINK.webp";
import AJ1travisscott from "../assets/Air Jordan 1 x Travis Scott.jpg";


export default function Destaques({ filtrarTermo }) {
  const listaTenis = [
    {
      id: 1,
      imagem: DunkMichigan,
      nome: "Dunk Low Michigan",
      preco: "R$ 2.055,00",
      parcelamento: " ou 12x R$ 171,25",
    },
    {
      id: 2,
      imagem: AJ4pinegreen,
      nome: " Air Jordan 4 Retro Pine Green",
      preco: "R$ 3.799,91",
      parcelamento: "ou 10x R$ 399,99",
    },


    {
      id: 3,
      imagem: AJ13courtpurple,
      nome: " Air Jordan 13 Retro COURT PURPLE",
      preco: "R$ 1.299,90",
      parcelamento: "ou 6x R$ 216,65",
    },
    {
      id: 4,
      imagem: ForumLow,
      nome: "Adidas Originals Forum Low",
      preco: "R$ 639,99",
      parcelamento: "ou 5x  R$ 128,00",
    },
    {
      id: 5,
      imagem: Yeezy700,
      nome: "Yeezy 700 V1 Utility Black",
      preco: "R$ 1.150,00",
      parcelamento: "ou 12x R$ 118,83",
    },
    {
      id: 6,
      imagem: Yeezy500,
      nome: "Yeezy 500 Blush",
      preco: "R$ 1.300,00",
      parcelamento: "ou 12x  R$ 134,33",
    },
    {
      id: 7,
      imagem: BapestaPink,
      nome: "Bapesta Pink",
      preco: "R$487,90",
      parcelamento: "ou 2x R$243,95",
    },
    {
      id: 8,
      imagem: AJ1travisscott,
      nome: "  Air Jordan 1 x Travis Scott ",
      preco: "R$2.250,00",
      parcelamento: "ou 12x R$187,50",
    },
  ];

  const filtroDestaques = listaTenis.filter((item) => {
    return item.nome.toLowerCase().includes(filtrarTermo.toLowerCase());
  });




  return (
    <>
    

      <div className={styleDestaques.Container}>
        <div className={styleDestaques.Carrosel}>
          <Swiper
            modules={[Navigation, Pagination, A11y, Scrollbar]}
            slidesPerView={1}
          >
            {filtroDestaques.map((dado) => {
              return (
                <SwiperSlide key={dado.id}>
                  <h1 className={styleDestaques.Titulo}>Destaques</h1>
                  <p className={styleDestaques.Informacoes}>
                    Você não pode perder essa coleção. Confira os preços!
                  </p>
                  <span className={styleDestaques.ContainerCarrosel}>
                    <img
                      className={styleDestaques.imagens}
                      src={dado.imagem}
                      alt=""
                    />
                    <h1 className={styleDestaques.Nome}>{dado.nome}</h1>
                    <h2 className={styleDestaques.Preco}>{dado.preco}</h2>
                    <p className={styleDestaques.Parcelamento}>
                      {dado.parcelamento}
                    </p>
                    <button  className={styleDestaques.btnCompra}>
                      COMPRAR AGORA
                    </button>
                  </span>
                </SwiperSlide>
              );
            })}

            {filtroDestaques.length === 0 ? <MensagemErro /> : ""}
          </Swiper>
        </div>
      </div>
    </>
  );
}
