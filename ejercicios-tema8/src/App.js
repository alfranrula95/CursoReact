import logo from './logo.svg';
import './App.css';
import Mensajes from './views/Mensajes.view';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MensajesPage from './pages/MensajesPage';
import RegistroPage from './pages/Registro';
import LoginPage from './pages/LoginPage';
import About from './pages/About';

function App() {

  let toggler = useSelector((state) => state.controlSesion); 
  
  return (
    <div className="App">
      <div className="App-body">
      <Router>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/registro" component={RegistroPage} />
        <Route exact path="/about" component={About} />
        <Route path="/mensajes">
            {toggler ? <Mensajes /> : <Redirect to='/' />}
          </Route>
      </Router>
       
      </div>
    </div>
  );
}

export default App;
