import './App.css'
import Header from './Pages/Header'
import { useState } from 'react'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Inicio from './Pages/Inicio'
import InicioDetalles from './Pages/InicioDetalles'
import Productos from './Components/Productos'

const idiomaInicial="es"
const traductor={
  es:{
    nosotros:"nosotros",
    contacto:"contacto",
    subtituloInicio:"Sinfonía de sabor queretana, con acordes alemanes",
    tituloInicio:"Bienvenido",
    btnInicioCafes:"Cafés",
    btnInicioPasteles:"Pasteles",
    cafes:[{
      id:1,
      nombre:"Amadeus",
      descripcion:"Café,rompope y crema batida.",
      precio:20,
      foto:"https://drive.google.com/uc?export=view&id=1mLXkLgTRG0uXaQhmc2-4y51VHCwt3VQz"},
    {
      id:2,
      nombre:"Mozart",
      descripcion:"Café aromático con chocolate.",
      precio:21,
      foto:"https://drive.google.com/uc?export=view&id=1fLC_axVr4dlzLCvnjcOlfMmdOiZGApoA"
    },
    {
      id:3,
      nombre:"Cappucino",
      descripcion:"Café expreso y leche montada con vapor.",
      precio:22,
      foto:"https://drive.google.com/uc?export=view&id=1pftk2j7PYd8_xWc6SwFCsJSam1iDzIbJ"
    }],
    pasteles:[{
      id:1,
      nombre:"Amadeus",
      descripcion:"Nuez con ganache de chocolate y amaretto.",
      precio:20,
      foto:"https://drive.google.com/uc?export=view&id=18XGuvtI2Wf26KS5Sx1z3QIR8eaELWsQI"},
    {
      id:2,
      nombre:"Mozart",
      descripcion:"Galletas de vainilla rellenas de crema de mantequilla; cubierta de chocolate.",
      precio:21,
      foto:"https://drive.google.com/uc?export=view&id=1Y6EIQGII2rbN9CViTeuq3EIqcpZnkWl8"
    },
    {
      id:3,
      nombre:"Yogurt",
      descripcion:"Delicioso y ligero mousse de yogurt en medio de dos galletas",
      precio:22,
      foto:"https://drive.google.com/uc?export=view&id=175SUtWdsX0xi6BMHQyrXjaLXlvKswaMe"
    }]
  },
  en:{
    nosotros:"us",
    contacto:"contact",
    subtituloInicio:"Symphony of Querétaro flavor, with German chords",
    tituloInicio:"Welcome",
    btnInicioCafes:"Coffees",
    btnInicioPasteles:"Cakes",
    cafes:[{
      id:1,
      nombre:"Amadeus",
      descripcion:"Coffee,eggnog and whipped cream.",
      precio:20,
      foto:"https://drive.google.com/uc?export=view&id=1mLXkLgTRG0uXaQhmc2-4y51VHCwt3VQz"},
    {
      id:2,
      nombre:"Mozart",
      descripcion:"Aromatic coffee with chocolate.",
      precio:21,
      foto:"https://drive.google.com/uc?export=view&id=1fLC_axVr4dlzLCvnjcOlfMmdOiZGApoA"
    },
    {
      id:3,
      nombre:"Cappucino",
      descripcion:"Espresso and steam-whipped milk.",
      precio:22,
      foto:"https://drive.google.com/uc?export=view&id=1pftk2j7PYd8_xWc6SwFCsJSam1iDzIbJ"
    }],
    pasteles:[{
      id:1,
      nombre:"Amadeus",
      descripcion:"Walnut with chocolate ganache and amaretto.",
      precio:20,
      foto:"https://drive.google.com/uc?export=view&id=18XGuvtI2Wf26KS5Sx1z3QIR8eaELWsQI"},
    {
      id:2,
      nombre:"Mozart",
      descripcion:"Vanilla cookies filled with buttercream; chocolate cover.",
      precio:21,
      foto:"https://drive.google.com/uc?export=view&id=1fLC_axVr4dlzLCvnjcOlfMmdOiZGApoA"
    },
    {
      id:3,
      nombre:"Cappucino",
      descripcion:"Delicious,light yogurt mousse in the middle of two cookies",
      precio:22,
      foto:"https://drive.google.com/uc?export=view&id=175SUtWdsX0xi6BMHQyrXjaLXlvKswaMe"
    }]
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
          <Route path="/" element={<Inicio textos={textos}/>}>
            <Route index element={<InicioDetalles textos={textos.tituloInicio}/>}/>
            <Route path='cafes' element={<Productos textos={textos.cafes}/>}/>
            <Route path='pasteles' element={<Productos textos={textos.pasteles}/>}/>
          </Route>
          <Route path="/nosotros" element="acerca de nosotros"/>
          <Route path="/contacto" element="este es el contacto"/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
