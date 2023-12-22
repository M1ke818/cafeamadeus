import './App.css'
import Header from './Pages/Header'
import { useState } from 'react'
import { HashRouter,Routes,Route } from 'react-router-dom'

const idiomaInicial="es"
const traductor={
  es:{
    nosotros:"nosotros",
    contacto:"contacto"
  },
  en:{
    nosotros:"us",
    contacto:"contact"
  }
}

function App() {
  const [idioma, setIdioma] = useState(idiomaInicial);
  const [textos, setTextos] = useState(traductor[idioma]);
  const cambiandoIdioma=(e)=>{
    if(e.target.value==="es"){
      setIdioma("es")
      setTextos(traductor.es)
    }else{
      setIdioma("en")
      setTextos(traductor.en)
    }
  }
  return (
    <>
      <HashRouter>
        <Header cambiandoIdioma={cambiandoIdioma} textos={textos}/>
        <Routes>
          <Route path="/" element="home"/>
          <Route path="/nosotros" element="acerca de nosotros"/>
          <Route path="/contacto" element="este es el contacto"/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
