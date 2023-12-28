import nosotros from '../Pages/Nosotros.module.css'

export default function Ambiente({textos}){
  console.log(textos)
  return(
    <div class={nosotros.ambiente_seccion}>
        <h3>{textos.subtitulo}</h3>
        <span>{textos.descripcion[0]}</span>
        <span>{textos.descripcion[1]}</span>
        <span>{textos.descripcion[2]}</span>
        <span>{textos.descripcion[3]}</span>
        <span>{textos.descripcion[4]}</span>
        <span>{textos.descripcion[5]}</span>
        <span>{textos.descripcion[6]}</span>
        <span>{textos.descripcion[7]}</span>
        <span>{textos.descripcion[8]}</span>
        <a href="https://ayudando.com.mx/" target="_blank" rel="noopener">{textos.descripcion[9]}</a>
        <span>{textos.descripcion[10]}</span>
     
    </div>
  )
}