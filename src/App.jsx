import './App.css'
import Header from './Pages/Header'
import { useState } from 'react'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Inicio from './Pages/Inicio'
import InicioDetalles from './Pages/InicioDetalles'
import Productos from './Components/Productos'
import Nosotros from './Pages/Nosotros'
import Ambiente from './Components/Ambiente'
import Historia from './Components/Historia'
import Contacto from './Pages/Contacto'

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
    }],
    nosotrosSeccion:[{
      id:1,
      titulo:"historia",
      subtitulo:"Somos una empresa 100% Queretana de ascendencia alemana",
      descripcion:[
        "Martina Neumann es originaria de la ciudad de Werdohl, Alemania. Llegó a la ciudad de México hace 35 años donde trabajó como maestra de alemán.",
        "Cuatro años después de su llegada abrió su primera sucursal ubicada en el emblemático acueducto de la ciudad de Querétaro un 5 de diciembre de 1986. Su gusto por la repostería y la cocina nació desde la infancia gracias a su mamá, una excelente repostera y cocinera que vivió parte de la segunda guerra mundial.",
        "Desde pequeños ella y sus hermanos ayudaban en la cocina, así fue como con la ayuda de talleres, cursos y la experiencia de su mamá aprendió desde pequeña sobre cocina y repostería alemana."],
      foto:"https://drive.google.com/uc?export=view&id=1NJD2_gH9RwBZtrKvYNbDtkvsKK_Ga2Nz"},
    {
      id:2,
      titulo:"medio ambiente",
      subtitulo:"Café Amadeus comprometido con el medio ambiente",
      descripcion:[
       "a través de:",
       "uso de paneles solares",
       "reciclaje",
       "ahorro de agua",
       "actividades de reforestacion",
       "empaques biodegradables",
       "proveedores locales",
       "donaciones",
       "y trabajamos directamente con la fundación",
       "Ayudando.com.mx",
       "apoyandolos en la alimentacion diaria de personas de bajos recursos."],
       foto:"https://drive.google.com/uc?export=view&id=1fn3X0rQ8QgiKM7XOmjvZ8EntCL4m1mRE"}],
      contactoSeccion:[{
          "id":1,
          "nombre":"nombre",
          "placeholder":"Amadeus González"
        },
        {
          "id":2,
          "nombre":"correo electrónico",
          "placeholder":"cafe.amadeus@email.com"
        },
        {
          "id":3,
          "nombre":"asunto",
          "placeholder":"Hola, me gusto mucho su café..."
        },
        {
          "id":4,
          "nombre":"Siguenos en nuestras redes sociales",
          "placeholder":null
        },
        {
          "id":5,
          "nombre":"enviar",
          "placeholder":null
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
    }],
    nosotrosSeccion:[{
        id:1,
        titulo:"hystory",
        subtitulo:"We are a 100% Querétaro's company, of German descent",
        descripcion:[
          "Martina Neumann is originally from Werdohl city,Germany. She arrived in Mexico City 35 years ago where she worked as a German teacher.",
          "Four years after his arrival, she opened his first branch located in the emblematic aqueduct of Querétaro city on December 5,1986.His taste for baking and cooking was born from childhood thanks to his mother, an excellent pastry chef and cook who lived through part of the Second World War.",
          "From a young age shre and her siblings helped in the kitchen, so with the help of workshops,courses and her mother's experience she learned from a young age about German cooking and baking."],
        foto:"https://drive.google.com/uc?export=view&id=1NJD2_gH9RwBZtrKvYNbDtkvsKK_Ga2Nz"},
      {
        id:2,
        titulo:"environment",
        subtitulo:"Amadeus Coffee committed to the environment",
        descripcion:[
         "through:",
         "use of solar panels",
         "recycling",
         "water saving",
         "reforestation activities",
         "biodegradable packaging",
         "local suppliers",
         "donations",
         "and we work directly with the foundation",
         "Ayudando.com.mx",
         "supporting them in the daily feeding of low-income people."
        ],
        foto:"https://drive.google.com/uc?export=view&id=1fn3X0rQ8QgiKM7XOmjvZ8EntCL4m1mRE"}],
        contactoSeccion:[
          {
            "id":1,
            "nombre":"name",
            "placeholder":"Amadeus Smith"
          },
          {
            "id":2,
            "nombre":"email",
            "placeholder":"amadeus.coffee@email.com"
          },
          {
            "id":3,
            "nombre":"topic",
            "placeholder":"Hello, I liked too much your coffee..."
          },
          {
            "id":4,
            "nombre":"Follow us on social media",
            "placeholder":null
          },
          {
            "id":5,
            "nombre":"send",
            "placeholder":null
          }
        ]
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
  /* console.log(traductor.es) */
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
            <Route path="/nosotros" element={<Nosotros textos={textos.nosotrosSeccion}/>}>
              <Route index element={<Historia textos={textos.nosotrosSeccion}/>}/>
              <Route path="ambiente" element={<Ambiente textos={textos.nosotrosSeccion[1]}/>}/>
            </Route>
          <Route path="/contacto" element={<Contacto textos={textos.contactoSeccion}/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
