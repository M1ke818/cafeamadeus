import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"
import contacto from '../Pages/contacto.module.css'

export default function Contacto({textos}){
  return(
    <section className={contacto.contenedor}>
      <form className={contacto.formulario}>
        <label>{textos[0].nombre}</label>
        <input type="text" placeholder={textos[0].placeholder} pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" title="Sólo se acepta ingresar letras"/>
        <label>{textos[1].nombre}</label>
        <input type="email" placeholder={textos[1].placeholder} pattern="^ ^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" title="escribe un correo valido"/>
        <label>{textos[2].nombre}</label>
        <textarea name="asunto" id="asunto" cols="30" rows="10" placeholder={textos[2].placeholder}></textarea>
        <button type="submit">{textos[4].nombre}</button>
      </form>
      <footer className={contacto.footer}>
        <p>{textos[3].nombre}</p>
        <a href="https://google.com.mx" target="\_blank" rel="noopener">
          <FontAwesomeIcon icon={faFacebook}/>
        </a>
        <a href="https://google.com.mx" target="\_blank" rel="noopener">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </footer>
    </section>
  )
}