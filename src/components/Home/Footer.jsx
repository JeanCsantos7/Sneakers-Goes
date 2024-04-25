
import styleFooter from '../styles/Footer.module.css'

export default function Footer()
{
    return(
        <>
         <div className={styleFooter.Container}> 
            <h1 className={styleFooter.Titulo}>Lançamentos e Novidades</h1>
            <p className={styleFooter.Informações}>Receba com exclusividade a nossa newsletter com tendências, <br /> promoções e muito mais</p>
             <div className={styleFooter.ContainerInput}>
             <input className={styleFooter.input} type="text" />
            <button className={styleFooter.btn}>CADASTRAR</button>
             </div>
            
         </div>
        </>
    )
}