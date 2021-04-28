import { Component, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import './Store.scss';
import { GETAllProductos } from "../services/http.service";
import { inciarSesion, setearLista, selectarProducto } from '../redux/actions';
import store from "../redux";
import { useHistory } from "react-router";

function StoreComponent() {
    const dispatch = useDispatch();
    const [lista, setLista] = useState([]);
    const productos = useSelector((state) => state.productos);
    const history = useHistory();

    const getProductos = () => {
        return GETAllProductos().then(data => {
            setLista(data);
            console.log('getter');
            console.log(data);
        });
    }

    useEffect(() => {
        console.log(productos.listaProductos);
        if(productos.listaProductos.length === 0){
            getProductos();
        }else {
            console.log('productos.listaProductos en state');
            setLista(productos.listaProductos);
        }
    }, [])

    const selectProducto = (idProd) => {
        console.log(idProd);
        dispatch(setearLista(lista));
        dispatch(selectarProducto(idProd));
        dispatch(inciarSesion());
        console.log(lista);
        history.push("/product", {id: 1});
        console.log('detalles');
    }

    return (
        < div className = "rowMio" >
            { lista &&
            lista.map((prod, index) => {
                return (
                    <div key={index} className="product" onClick={() => selectProducto(prod.id)}>
                        <h4>{prod.title}</h4>
                        <br></br>
                        <img src={prod.image}></img>
                    </div>
                );
            })
}
        </div >
    );

}

export default StoreComponent;
