import { memo, useCallback, useEffect } from 'react';
import '../pages/Store.scss';
import Producto from './Producto';

/**
 * Este componente Catalogo tiene la funcionalidad de mostrar todos los productos que recibe como props,
 * haciendo cada uno de ellos una instáncia de otro componente hijo (Producto).
 * @param props Los props que recibe este componente són:
 *  el listado de productos y la acción a realizar en seleccionar uno.
 * @returns El listado con todos los productos mapeado de manera que por cada uno de ellos,
 * haya una instáncia diferente de Producto, al que se le pasaran por props, el objeto de producto correspondiente,
 * así como la acción a realizar en seleccionarlo.
 */
function Catalogo(props) {

    const selectear = useCallback((id) => {
        props.select(id);
    }, [props])

    useEffect(() => {
        console.log("render Catalogo");
    }, []);

    return (
        < div className="row col-md-12 muestrario" >
            { props.productos.length > 0 &&
                props.productos.map((prod, index) => {
                    return (
                        <Producto item={prod} key={index} select={selectear} />
                    );
                })
            }
            { props.productos.length === 0 && <h1>Cargando productos...</h1>}
        </div>
    );
}

/*

return (
    <div key={index} className="col-md-3 card product " onClick={() => selectear(prod.id)}>
        <h4>{prod.title}</h4>
        <br></br>
        <img src={prod.image}></img>
    </div>
);

*/

export default memo(Catalogo);