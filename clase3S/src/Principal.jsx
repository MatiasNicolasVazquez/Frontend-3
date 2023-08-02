import Producto from "./Producto";

function Principal(){
    return(

        <div className="container">
            <Producto nombre="Remera" precio="100"/>
            <Producto nombre="Pantalon" precio="50"/>
            <Producto nombre="Zapas" precio="20"/>
        </div>
    )
}

export default Principal;