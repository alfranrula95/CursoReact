import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import RegistroPage from './pages/Registro';
import LoginPage from './pages/LoginPage';
import StoreComponent from './pages/Store';
import SessionHeader from './components/SesionHeader';
import DetallesProducto from './pages/DetallesProducto';
import About from './pages/About';
import context from './context/context';
import { useReducer, useState } from 'react';
import { initialStateLogger, LOGIN, LOGOUT, reducerLogger } from './context/reducers';

function App() {

  let toggler = useSelector(state => state.iniciado);
  //const [logger, setLogger] = useState(false);

  let logout = () => { 
    dispatch({type: LOGOUT});
  };

  let login = () => {
    dispatch({type: LOGIN});
  };

  const [logger, dispatch] = useReducer(reducerLogger, initialStateLogger);

  return (
    <div className="App">
      <div className="App-body">
        <context.Provider className="App" value={{
          logged: logger.logged,
          login: login,
          logout: logout
        }}>
          <Router>
            {logger.logged && <SessionHeader />}
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/registro" component={RegistroPage} />
            <Route path="/store">
              {logger.logged ? <StoreComponent /> : <Redirect to='/' />}
            </Route>
            <Route path="/product">
              {logger.logged ? <DetallesProducto /> : <Redirect to='/' />}
            </Route>
          </Router>
        </context.Provider>
      </div>
    </div>
  );
}
export default App;
