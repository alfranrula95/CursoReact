/* Fichero redux/index.js */
import { combineReducers, createStore } from 'redux';
import { mensajes, controlSesion} from './reducers';


// STORE - El estado global de la aplicación.

const rootReducer = combineReducers({mensajes, controlSesion}, {});


let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;