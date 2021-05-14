/* Fichero redux/reducers/index.js */

import { ACTIONS_PRODUCTOS } from '../actions';

import { ACTIONS_SESION } from "../actions";

const initialState = {
  listaProductos: [],
  selected: null,
  iniciado: false,
  productoSel: null,
};

export const productos = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_PRODUCTOS.GETTEAR:
      state.listaProductos = action.payload;
      return {...state}
    case ACTIONS_PRODUCTOS.SELECCIONAR:
      state.selected = action.payload;
      return {...state}
    case ACTIONS_PRODUCTOS.CARGAR_UNO:
      state.productoSel = action.payload;
      return {...state}
      case ACTIONS_PRODUCTOS.SEL_PROD:
        state.productoSel = action.payload;
        return {...state}
    case ACTIONS_SESION.LOGIN:
      state.iniciado = true;
      return {...state}
    case ACTIONS_SESION.LOGOUT:
      state.iniciado = false;
      return {...state}
    default:
      return {...state}
  }
}



const initialSesionState = {
  sesionControl: false,
};

export const controlSesion = (state = initialSesionState.sesionControl, action) => {
  switch (action.type) {
    case ACTIONS_SESION.LOGIN:
      state = true;
      return state;
    case ACTIONS_SESION.LOGOUT:
      state = false;
      return state;
    default:
      return false;
  }
}