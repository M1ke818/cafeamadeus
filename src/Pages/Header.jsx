import { NavLink } from 'react-router-dom'
import header from './Header.module.css'
import logo from '../assets/logo.png'

export default function Header({cambiandoIdioma,textos}){
  return(
    <header className={header.contenedor}>
      <NavLink to="/" className={({isActive})=>isActive?header.activologo:null}>
        <figure>
          <img src={logo} alt="logo"/>
        </figure>
      </NavLink>
      <nav className={header.nav}>
        <NavLink to="/nosotros" className={({isActive})=>isActive?header.activonav:null}><h3>{textos.nosotros}</h3></NavLink>
        <NavLink to="/contacto" className={({isActive})=>isActive?header.activonav:null}><h3>{textos.contacto}</h3></NavLink>
      </nav>
      <select className={header.select} onClick={cambiandoIdioma}>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </header>
  )
}