import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { GETProducto } from "../services/http.service";
import './Store.scss';

function DetallesProducto() {
    const idSel = useSelector((state) => state.productos);
    const [prod, setProd] = useState(null);
    const history = useHistory();

    useEffect(() => {
        console.log(idSel.selected);
        if (idSel.selected) {
            return GETProducto(idSel.selected).then(data => {
                setProd(data);
            });
        } else {
            history.push("/store");
        }
    }, [])

    return (
        <div className="rowMio">
            {prod &&
                <div className="detalles">
                    <h1>{prod.title}</h1>
                    <br></br>
                    <img src={prod.image}></img>
                    <p>{prod.description}</p>
                    <p>{prod.price}$</p>
                </div>}
        </div>

    )
}
export default DetallesProducto;