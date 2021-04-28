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

function App() {

  let toggler = useSelector((state) => state.controlSesion);

  return (
    <div className="App">
      <div className="App-body">

        <Router>
          {toggler && <SessionHeader />}
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/registro" component={RegistroPage} />
          <Route path="/store">
            {toggler ? <StoreComponent /> : <Redirect to='/' />}
          </Route>
          <Route path="/product">
            {toggler ? <DetallesProducto /> : <Redirect to='/' />}
          </Route>
        </Router>

      </div>
    </div>
  );
}
/*
<Route path="/mensajes">
            {toggler ? <Mensajes /> : <Redirect to='/' />}
          </Route>
*/
export default App;
