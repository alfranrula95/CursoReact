/* Fichero redux/actions/index.js */

export const ACTIONS_PRODUCTOS = {
    GETTEAR: "GET_PRODUCTOS",
    SELECCIONAR: "VER_PRODUCTO",
}

export const selectarProducto = (index) => {
    return {
        type: ACTIONS_PRODUCTOS.SELECCIONAR,
        payload: index
    }
}

export const setearLista = (productos) => {
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
    return {
        type: ACTIONS_SESION.LOGIN,
    }
}

export const cerrarSesion = () => {
    return {
        type: ACTIONS_SESION.LOGOUT,
    }
}