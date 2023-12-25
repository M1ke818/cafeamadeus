import { NavLink } from "react-router-dom"
import classNames from "classnames"

export default function Boton({estilos,textos,hacia}){
  const clases=classNames(`btn`,`${estilos[0]}`)
  console.log(clases)
  return(
    <button className={clases}>
      <NavLink to={hacia} className={({isActive})=>isActive?`${estilos[1]}`:null}>{textos}</NavLink>
    </button>
  )
}