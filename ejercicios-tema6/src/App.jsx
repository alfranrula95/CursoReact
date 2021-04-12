import logo from './logo.svg';
import './App.css';
import Vista from './views/Vista.view';
import ListaNumeros from './components/ListaNumeros';
import Mensajes from './views/Mensajes.view';
import Formulario from './components/Formulario';
import FormularioFormikYUP from './components/FormularioFormik';

function App() {
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Vista ></Vista>
      </header>
    </div>
  );*/

  /*
  let compra = ["Pan", "Guacamole", "Tomates", "Jamón"];

  return (
    <div className = "App" >
      <header className="App-header">
        <ListaNumeros data={compra}></ListaNumeros>
      </header>
    </div >
  )*/
  /*
    <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>ReactJS | Imagina Formación</h1>
        </header>*/

  return (
    <div className="App">
      <div className="App-body">
        <Mensajes></Mensajes>
      </div>
    </div>
  );

  /*
   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <Formulario />
       </header>
     </div>
   );
   
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormularioFormikYUP />
      </header>
    </div>
  );
  */
}

export default App;
