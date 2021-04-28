/* Fichero redux/index.js */
import { combineReducers, createStore } from 'redux';
import { productos, controlSesion} from './reducers';


// STORE - El estado global de la aplicación.

const rootReducer = combineReducers({productos, controlSesion}, {});


let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;