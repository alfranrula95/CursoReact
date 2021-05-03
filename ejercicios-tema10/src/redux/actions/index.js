/* Fichero redux/actions/index.js */

export const ACTIONS_PRODUCTOS = {
    GETTEAR: "GET_PRODUCTOS",
    SELECCIONAR: "VER_PRODUCTO",
    LOAD_PRODUCTS: 'LOAD_PRODUCTS',
    CARGAR_UNO : 'LOAD_ONE',
    SEL_PROD : 'SEL_PROD'
}

	
export const loadProducts = () => {
    return {
        type: ACTIONS_PRODUCTOS.LOAD_PRODUCTS
    }
}

export const selProd = (prod) => {
    console.log('selprod - > ' + prod);
    return {
        type: ACTIONS_PRODUCTOS.SEL_PROD,
        payload: prod
    }
}

export const loadOneProduct = (index) => {
    return {
        type: ACTIONS_PRODUCTOS.CARGAR_UNO,
        payload: index
    }
}

export const selectarProducto = (index) => {
    return {
        type: ACTIONS_PRODUCTOS.SELECCIONAR,
        payload: index
    }
}

export const setearLista = (productos) => {
    console.log('setearLista');
    console.log(productos);
    return {
        type: ACTIONS_PRODUCTOS.GETTEAR,
        payload: productos
    }
}

export const ACTIONS_SESION = {
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT"
}

export const inciarSesion = () => {
    console.log('logging');
    return {
        type: ACTIONS_SESION.LOGIN,
    }
}

export const cerrarSesion = () => {
    return {
        type: ACTIONS_SESION.LOGOUT,
    }
}