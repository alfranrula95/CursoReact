import { memo, useCallback, useEffect } from 'react';
import '../pages/Store.scss';

function Producto(props) {

    const selectear = useCallback((id) => {
        props.select(id);
    }, [])

    useEffect(() => {
        console.log("render Producto");
    }, []);

    return (
        <div className="col-md-3 card product " onClick={() => selectear(props.item.id)}>
            <h4>{props.item.title}</h4>
            <br></br>
            <img src={props.item.image}></img>
        </div>
    );

}

export default memo(Producto);