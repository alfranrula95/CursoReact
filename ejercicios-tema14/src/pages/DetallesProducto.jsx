import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { dispatch } from "rxjs/internal/observable/range";
import { loadOneProduct } from "../redux/actions";
import { GETProducto } from "../services/http.service";
import './Store.scss';

function DetallesProducto() {
    const dispatch = useDispatch();
    const idSel = useSelector(state => state);
    const [prod, setProd] = useState(null);
    const history = useHistory();

    useEffect(async() => {
        console.log(idSel.selected);
        if (idSel.selected) {
            /*return GETProducto(idSel.selected).then(data => {
                setProd(data);
            });*/
            dispatch(loadOneProduct(idSel.selected));
        } else {
            history.push("/store");
        }
    }, [])

    return ( 
        <div className="row col-md-12 justify-content-center">
            {idSel.productoSel &&
                <div className="col-md-8 detalles card">
                    <h1>{idSel.productoSel.title}</h1>
                    <br></br>
                    <img src={idSel.productoSel.image}></img>
                    <p>{idSel.productoSel.description}</p>
                    <p>{idSel.productoSel.price}$</p>
                </div>}
        </div>

    )
}
export default DetallesProducto;