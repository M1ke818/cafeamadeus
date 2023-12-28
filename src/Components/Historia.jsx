import nosotros from '../Pages/Nosotros.module.css'
export default function Historia({textos}){
  /* console.log(textos[0].descripcion) */
  return(
    <div className={nosotros.historia_seccion}>
      <p>{textos[0].descripcion[0]}</p>
      <p>{textos[0].descripcion[1]}</p>
      <p>{textos[0].descripcion[2]}</p>
    </div>
  )
}