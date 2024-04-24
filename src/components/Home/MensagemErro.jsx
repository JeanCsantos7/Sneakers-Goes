
import ImageErro from '../assets/ERRO 404.jfif'
import styleErro from '../styles/ErroBusca.module.css'

export default function MensagemErro()
{

    return(
        <>
         <div className={styleErro.Container}>
         <h1 className={styleErro.Titulo}>Não localizamos nenhum resultado pra sua busca</h1>
         <img className={styleErro.imagem} src={ImageErro} alt="" />
         </div>
         
        </>
    )

}