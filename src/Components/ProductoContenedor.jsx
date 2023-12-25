export default function ProductoContenedor({producto}){
  return(
    <article className="producto_contenedor">
      <figure><img src={producto.foto} alt={producto.nombre} /></figure>
      <h3>{producto.nombre}</h3>
      <p>{producto.descripcion}</p>
      <p>$ {producto.precio}</p>
    </article>
  )
}
