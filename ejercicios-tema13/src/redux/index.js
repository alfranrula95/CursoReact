/* Fichero redux/index.js */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { productos, controlSesion } from './reducers';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas';


// Crearemos un saga
const sagaMiddleware = createSagaMiddleware()

// STORE - El estado global de la aplicación.

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const composeEnhancers = devTools || compose;
let store = createStore(
  //rootReducer,
  productos,
  /* SIN REDUX - DEVTOOLS */
  /*composeEnhancers(
    applyMiddleware(sagaMiddleware),
  )*/
  /* CON REDUX - DEVTOOLS */
  compose( 
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

	
sagaMiddleware.run(rootSaga);

export default store;