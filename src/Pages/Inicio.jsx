import inicio from '../Pages/Inicio.module.css'
import Boton from '../Components/Boton'
import { Outlet } from 'react-router-dom'

export default function Inicio({textos}){
  return(
    <main className={inicio.contenedor}>
      <h1 className={inicio.h1}>{textos.subtituloInicio}</h1>
      <Boton estilos={[inicio.btn1,inicio.activo]} textos={textos.btnInicioCafes} hacia="/cafes"/>
      <Boton estilos={[inicio.btn2,inicio.activo]} textos={textos.btnInicioPasteles} hacia="/pasteles"/>
      <section className={inicio.section}>
        <Outlet/>
      </section>
    </main>
  )
}