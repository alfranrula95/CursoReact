/* Fichero redux/index.js */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { productos, controlSesion } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas';



// Crearemos un saga
const sagaMiddleware = createSagaMiddleware()

// STORE - El estado global de la aplicación.

const rootReducer = combineReducers({ productos, controlSesion });


let store = createStore(
  //rootReducer,
  productos,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

	
sagaMiddleware.run(rootSaga);

export default store;