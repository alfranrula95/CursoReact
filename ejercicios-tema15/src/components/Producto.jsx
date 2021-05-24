import { memo, useCallback, useEffect } from 'react';
import '../pages/Store.scss';

/**
 * Este componente se encargará de estructurar y mostrar la información del producto recibido por props y preparar la acción a realizar si el usuario interactúa con el producto.
 * @param props Los props que recibe este componente son el objeto del Producto que ha de mostrar
 * y la acción a realizar en el momento de la interacción del usuario.
 * @returns Carta con el contenido e información del producto que recibe por props.
 */
function Producto(props) {

    const selectear = useCallback((id) => {
        props.select(id);
    }, [props])

    useEffect(() => {
        console.log("render Producto");
    }, []);

    return (
        <div className="col-md-3 card product " onClick={() => selectear(props.item.id)}>
            <h4>{props.item.title}</h4>
            <br></br>
            <img src={props.item.image} alt="imagen"></img>
        </div>
    );

}

export default memo(Producto);