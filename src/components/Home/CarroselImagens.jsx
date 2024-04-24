import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styleCarrosel from "../styles/CarroselImagens.module.css";

import Jordan1 from "../assets/Air jordan 1.jpg";
import Jordan3 from "../assets/Air jordan 3 Banner.jpg";
import Jordan4 from "../assets/Air Jordan 4 banner.jpg";
import Jordan11 from "../assets/Air jordan 11 banner.jpg";

export default function CarroselImagens() {
  const arrayImagens = [
    { id: 1, imagem: Jordan11 },
    { id: 2, imagem: Jordan1 },
    { id: 3, imagem: Jordan4 },
    { id: 4, imagem: Jordan3 },
  ];

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {arrayImagens.map((dado) => {
          return (
            <SwiperSlide key={dado.id}>
              <div>
                <img
                  className={styleCarrosel.Imagens}
                  src={dado.imagem}
                  alt=""
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
