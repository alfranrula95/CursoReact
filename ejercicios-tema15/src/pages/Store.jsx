import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Store.scss';
import { selectarProducto, loadProducts } from '../redux/actions';
import { useHistory } from "react-router";
import Catalgo from "../components/Catalogo";

/**
 * Componente que actúa como página principal de la tienda. 
 * En este componente se obtendrán los productos a mostrar, que una vez obtenidos, se pasarán
 * a un componente hijo.
 * @returns El componente hijo Catalogo al que le pasa los props necesarios
 */
function StoreComponent() {
    const dispatch = useDispatch();
    const [lista, setLista] = useState([]);
    const store = useSelector(state => state);
    const history = useHistory();

    /*
    const getProductos = () => {
        return GETAllProductos().then(data => {
            setLista(data);
            console.log('getter');
            console.log(data);
        });
    }*/

    useMemo(() => {
        console.log('usememo');
        setLista(store.listaProductos);
    }, [store.listaProductos])

    useEffect(() => {
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
