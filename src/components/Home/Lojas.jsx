import styleLojas from "../styles/Lojas.module.css";

import MensagemErro from "./MensagemErro";

export default function Lojas({ filtrarTermo }) {
  const listaLojas = [
    {
      id: 1,
      unidade: "Shopping Campo Limpo",
      funcionamento: "Segunda à sábado das 10:00 ÀS 22:00",
      localidade:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.709930435691!2d-46.75717179999999!3d-23.650556999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce53dd5311298f%3A0x622c1aaf445cc2fb!2sShopping%20Campo%20Limpo!5e0!3m2!1spt-BR!2sbr!4v1713908392369!5m2!1spt-BR!2sbr",
    },
    {
      id: 2,
      unidade: "Mooca Plaza Shopping",
      funcionamento: "Seg à sáb das 10:00 ÀS 22:00",
      localidade:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.67911519269!2d-46.59706942466939!3d-23.57996547878707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bf8eb055555%3A0x27d602ac7a149814!2sMooca%20Plaza%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1713908102346!5m2!1spt-BR!2sbr",
    },
    {
      id: 3,
      unidade: "Grand Plaza Shopping",
      funcionamento: "Seg à sáb das 10:00 ÀS 22:00",
      localidade:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.7607760844708!2d-46.534613724839545!3d-23.648736778739845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4294ff676307%3A0xd9bb1a8238ff865a!2sGrand%20Plaza%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1713909649133!5m2!1spt-BR!2sbr",
    },
    {
      id: 4,
      unidade: "Morumbi Shopping",
      funcionamento: "Seg à sáb das 10:00 ÀS 22:00",
      localidade:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4760452156675!2d-46.70118232466801!3d-23.623116878757433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50c4a726aaab%3A0xa6b37701be082ac8!2sMorumbi%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1713910355053!5m2!1spt-BR!2sbr",
    },
    {
      id: 5,
      unidade: "Shopping Tamboré",
      funcionamento: "Seg à sáb das 10:00 ÀS 22:00",
      localidade:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.7820583862285!2d-46.836925524844276!3d-23.504358278838932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf017b8c1a5da9%3A0x22a277028d33acc!2sShopping%20Tambor%C3%A9!5e0!3m2!1spt-BR!2sbr!4v1713910489591!5m2!1spt-BR!2sbr",
    },
    {
      id: 6,
      unidade: "Shopping Metrô Tucuruvi",
      funcionamento: "Seg à sáb das 10:00 ÀS 22:00",
      localidade:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.4512880364973!2d-46.60531122484514!3d-23.480249278855617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef672b3b00001%3A0x52ec2afbadc14ef!2sShopping%20Metr%C3%B4%20Tucuruvi!5e0!3m2!1spt-BR!2sbr!4v1713910638787!5m2!1spt-BR!2sbr",
    },
    {
      id: 7,
      unidade: "Shopping Metrô Itaquera",
      funcionamento: "Seg à sáb das 10:00 ÀS 22:00",
      localidade:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.775878464536!2d-46.47321812484309!3d-23.54056207881413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5e622db57c4f%3A0x3de99bb691d3dc68!2sShopping%20Metr%C3%B4%20Itaquera!5e0!3m2!1spt-BR!2sbr!4v1713910688637!5m2!1spt-BR!2sbr",
    },
    {
      id: 8,
      unidade: "Shopping Ibirapuera",
      funcionamento: "Seg à sáb das 10:00 ÀS 22:00",
      localidade:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.828208390236!2d-46.66855932484079!3d-23.61049327876603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a09161d82d3%3A0xeea06a7cc702728a!2sShopping%20Ibirapuera!5e0!3m2!1spt-BR!2sbr!4v1713910989517!5m2!1spt-BR!2sbr",
    },
  ];

  const filtro = listaLojas.filter((item) => {
    return item.unidade.toLowerCase().includes(filtrarTermo.toLowerCase());
  });

  return (
    <>
      <div className={styleLojas.Container}></div>

      {filtro.map((item) => {
        return (
          
          <div className={styleLojas.Containers} key={item.id}>
            <div className={styleLojas.cardContainer}>
              <h1 className={styleLojas.TituloCard}>{item.unidade}</h1>
              <p className={styleLojas.funcionamento}>
                Funcionamento:{item.funcionamento}
              </p>
              <iframe src={item.localidade}></iframe>
            </div>
          </div>
        );
      })}

      {
        filtro.length === 0 ? <MensagemErro/> :  ''
      }
    </>
  );
}
