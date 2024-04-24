import styleDrop from "../styles/Drop.module.css";
import NB360 from "../assets/NB360.png";
import NB860 from "../assets/NB860.png";
import NB860Blue from "../assets/NB860 BLUE.png";
import NIKE600 from "../assets/NIKEP600.png";
import Mizuno from "../assets/Mizuno.png";




import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


export default function Drop({filtrarTermo}) {
  


  
  const listaImagens = [
    {
      id: 1,
      imagem: NB360,
      Modelo: "New Balance 860V2",
      valor: "R$ 899,99",
      parcelamento: "Ou 10x R$ 89,99",
    },
    {
      id: 2,
      imagem: NB860,
      Modelo: "New Balance 860V2",
      valor: "R$ 899,99",
      parcelamento: "Ou 10x R$ 89,99",
    },
    {
      id: 3,
      imagem: NB860Blue,
      Modelo: "New Balance 860V2",
      valor: "R$ 899,99",
      parcelamento: "Ou 10x R$ 89,99",
    },
    {
      id: 4,
      imagem: NIKE600,
      Modelo: "Nike P-6000",
      valor: "R$ 799,99",
      parcelamento: "Ou 10x R$ 79,99",
    },
    {
      id: 5,
      imagem: Mizuno,
      Modelo: "Mizuno  Countryside",
      valor: "R$ 799,99",
      parcelamento: "Ou 10x R$ 79,99",
    },
  ];

  const FiltroDrop = listaImagens.filter((filtro) => {
    return(
        filtro.Modelo.toLowerCase().includes(filtrarTermo.toLowerCase())
    )
  })

 



 

  return (


   <>
      
     
     
      <div className={styleDrop.Container}>
     
        <Swiper
          modules={[Pagination, Navigation, A11y, Scrollbar]}
          slidesPerView={1}
          navigation
          
     
        >
          {FiltroDrop.map((item) => {
            return (
             
             <SwiperSlide key={item.id}>
              <h1 className={styleDrop.Titulo}>Drops Disponíveis</h1>

                <span className={styleDrop.ContainerCard}>
                  <div className={styleDrop.CardLaranja}>
                    <img className={styleDrop.imagemCard} src={item.imagem} alt="" />
                  </div>
                  <div className={styleDrop.CardCinza}>
                    <h1 className={styleDrop.TituloCard}>{item.Modelo}</h1>
                    <h2 className={styleDrop.Preco}>{item.valor}</h2>
                    <p className={styleDrop.Parcelamento}>{item.parcelamento}</p>
                    <button className={styleDrop.btnCompra}>COMPRAR AGORA</button>
                   
                  
                  
                  </div>
                </span>
              </SwiperSlide>
            );
          })}

          {
            FiltroDrop.length === 0 ? '' : ''
          }
        </Swiper>
       
      </div>
   
    

    </>
  );
}
