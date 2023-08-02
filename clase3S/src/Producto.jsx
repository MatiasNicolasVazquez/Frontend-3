function Producto(props){
    return(
            <div className="card">
            <h2>Producto:{props.nombre}</h2>
            <p>Precio:{props.precio}</p>
            </div>
    )

}

export default Producto;