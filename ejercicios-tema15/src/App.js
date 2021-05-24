import './App.scss';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import RegistroPage from './pages/Registro';
import LoginPage from './pages/LoginPage';
import StoreComponent from './pages/Store';
import SessionHeader from './components/SesionHeader';
import DetallesProducto from './pages/DetallesProducto';
import About from './pages/About';
import context from './context/context';
import { useEffect, useReducer } from 'react';
import { initialStateLogger, LOGIN, LOGOUT, reducerLogger } from './context/reducers';
import BarraOpciones from './components/BarraOpciones';

function App() {

  //let toggler = useSelector(state => state.iniciado);
  //const [logger, setLogger] = useState(false);

  let logout = () => {
    dispatch({ type: LOGOUT });
  };

  let login = () => {
    dispatch({ type: LOGIN });
  };

  const [logger, dispatch] = useReducer(reducerLogger, initialStateLogger);

  useEffect(() => {
    console.log("render APP");
  }, []);

  return (
    <div className="App">
      <div className="App-body">
        <BarraOpciones />
        <div className="container">
          <context.Provider className="App" value={{
            logged: logger.logged,
            login: login,
            logout: logout
          }}>
            <Router>
              {logger.logged && <SessionHeader />}
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/about">
                {logger.logged ? <About /> : <Redirect to='/' />}
              </Route>
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
    </div>
  );
}
export default App;
