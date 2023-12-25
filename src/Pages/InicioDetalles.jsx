import detalles from '../Pages/InicioDetalles.module.css'
import ReactPlayer from 'react-player'


export default function InicioDetalles({textos}){
  return(
    <div>
      <h2 className={detalles.titulo}>{textos}</h2>
      <ReactPlayer url="https://youtu.be/fS4IgipJTV4" muted loop playing={true}/>
    </div>
  )
}