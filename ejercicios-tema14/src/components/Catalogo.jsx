import { memo, useCallback, useEffect } from 'react';
import '../pages/Store.scss';
import Producto from './Producto';

function Catalogo(props) {

    const selectear = useCallback((id) => {
        props.select(id);
    }, [])

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