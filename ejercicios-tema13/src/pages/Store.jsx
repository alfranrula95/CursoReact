import { Component, useCallback, useEffect, useMemo, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import './Store.scss';
import { GETAllProductos } from "../services/http.service";
import { inciarSesion, setearLista, selectarProducto, loadProducts } from '../redux/actions';
import store from "../redux";
import { useHistory } from "react-router";
import Catalgo from "../components/Catalogo";

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

    const cargaLista = useMemo(() => {
        console.log('usememo');
        setLista(store.listaProductos);
    }, [store.listaProductos])

    useEffect(async () => {
        console.log("render Store");
        if (store.listaProductos.length === 0) {
            //getProductos();
            console.log('getteando');
            dispatch(loadProducts());
            //setLista(store.listaProductos);
        } else {
            //setLista(store.listaProductos);
        }
    }, [])

    const selectProducto = useCallback((idProd) => {
        dispatch(selectarProducto(idProd));
        history.push("/product", { id: 1 });
    }, [])

    return (

        <Catalgo productos={lista} select={selectProducto} />
    );

}

export default StoreComponent;
