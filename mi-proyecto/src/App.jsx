import React, { Component, useEffect, useRef, useState } from 'react';
import './App.css';
import Articulo from './components/Articulo';
import Bitcoin from './components/Bitcoin';
import Clipboard from './components/Clipboard';
import Focus from './components/Focus';
import Imagen from './components/Imagen';
import Raton from './components/Raton';
import Teclado from './components/Teclado';
import Touch from './components/Touch';

/*
function App() {

  const manejarPulsacion = (event) => {
    event.preventDefault();
    console.log("Objeto evento: ", event);
  }

  return (
    <a href="https://www.google.es" onClick={manejarPulsacion}>Ir a Google</a>
  );
  //return <Articulo />
  //return <Bitcoin /> 

}
export default App;
*/
/*
export default class AppClase extends Component {
  constructor(props) {
    super(props);    
    this.state = {encendido: true};
    this.manejarPulsacion = this.manejarPulsacion.bind(this);
  }
  
  manejarPulsacion(event) {
    this.setState((prevState, props) => ({       
      encendido: !prevState.encendido
    }));
  }
  
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <button onClick={this.manejarPulsacion}>
            {this.state.encendido ? 'Activado' : 'Desactivado'}
          </button>
        </header>
      </div>
    );
  }
}
*/
function App() {
  const nombreRef = React.createRef();
  const apellidosRef = React.createRef();

  const [resultado, setResultado] = useState('');


  // const [contador, setContador] = useState(0);
  const contador = useRef(0);


  useEffect(() => {
    contador.current = contador.current + 1;
  })


  const manejarPulsacion = (event) => {
    setResultado(Math.random() + "");
  }

  /*return (
    <div className="App">
      <header className="App-header">
        <h1>Trabajando con Refs</h1>

        <button onClick={manejarPulsacion}>Re renderizars</button>

        <div ref={contador}>
          El componente se ha renderizado: {contador.current}
        </div>
        
      </header>
    </div>
  );*/
  //return <Teclado />
  //return <Raton />
  //return <Touch />
  //return <Imagen />
  //return <Focus />
  return <Clipboard /> 
}
export default App;
