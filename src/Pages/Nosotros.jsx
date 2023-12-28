import nosotros from '../Pages/Nosotros.module.css'
import Boton from '../Components/Boton'
import { Outlet } from 'react-router-dom'

export default function Nosotros({textos}){
  console.log(textos[0].subtitulo.split(" "))
    const arreglo=textos[0].subtitulo.split(" ")
    const titulo=arreglo.map(el=><span>{el}</span>)
  
  return(
    <section className={nosotros.contenedor}>
      <h2>{titulo}</h2>
      <article className={nosotros.botones}>
      <Boton estilos={[nosotros.history]} textos={textos[0].titulo} hacia="/nosotros"></Boton>
      <Boton estilos={[nosotros.ambiente]} textos={textos[1].titulo} hacia="/nosotros/ambiente"></Boton>
      </article>
      <div className={nosotros.rectangulo}></div>
      <img src={textos[0].foto} alt={textos[0].titulo} className={nosotros.fundada}/>
      <img src={textos[1].foto} alt={textos[1].titulo} className={nosotros.reforestacion}/>
      <article className={nosotros.descripcion}>
        <Outlet/>
      </article>
    </section>
  )
}