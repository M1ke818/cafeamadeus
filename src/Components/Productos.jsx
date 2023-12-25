import ProductoContenedor from "./ProductoContenedor";

export default function Productos({textos}){
  return(
    <>
      {textos.map(producto=>(
        <ProductoContenedor key={producto.id} producto={producto}/>
      ))}
    </>
  )
}