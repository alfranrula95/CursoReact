import { Component, useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import './Store.scss';
import { GETAllProductos } from "../services/http.service";
import { inciarSesion, setearLista, selectarProducto, loadProducts } from '../redux/actions';
import store from "../redux";
import { useHistory } from "react-router";

function StoreComponent(props) {
    const dispatch = useDispatch();
    const [lista, setLista] = useState([]);
    const store = useSelector(state => state);
    const history = useHistory();

    const getProductos = () => {
        return GETAllProductos().then(data => {
            setLista(data);
            console.log('getter');
            console.log(data);
        });
    }

    useEffect(async () => {
        if (store.listaProductos.length === 0) {
            console.log('getter');
            //getProductos();
            dispatch(loadProducts());
            console.log('into getter');
            setLista(store.listaProductos);
        } else {
            console.log('productos.listaProductos en state');
            setLista(store.listaProductos);
        }
    }, [])

    const selectProducto = (idProd) => {
        dispatch(selectarProducto(idProd));
        dispatch(inciarSesion());
        history.push("/product", { id: 1 });
    }

    return (
        < div className="rowMio" >
            { store.listaProductos.length > 0 &&
                store.listaProductos.map((prod, index) => {
                    return (
                        <div key={index} className="product" onClick={() => selectProducto(prod.id)}>
                            <h4>{prod.title}</h4>
                            <br></br>
                            <img src={prod.image}></img>
                        </div>
                    );
                })
            }
            { store.listaProductos.length === 0 && <h1>Cargando productos...</h1>}
        </div >
    );

}

export default StoreComponent;
