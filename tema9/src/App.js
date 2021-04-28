import logo from './logo.svg';
import './App.css';
import { GETPetition, POSTPetition } from './services/http.service';
import { useState } from 'react';
import { recojer } from './services/taxi.service';
import PrincipalComponent from './components/principal.component';

function App() {

  const [msg, setMsg] = useState("")
  
  let obtenerResultado = () => {
    setMsg("Taxi en camino... 🚕💨");
    recojer().then(data => setMsg(data));
  }

  /*
  return (
    <div className='App'>
      <div className='App-header'>
        <h1>¡Trabajando con promesas!</h1>
  
        <button className='btn btn-primary mt-5' onClick={obtenerResultado}>
          Llamar al taxi
        </button>
        <p className='mt-3'>{msg}</p>
      </div> 
    </div>
  )*/

  

  return (
    <div className='App'>
      <div className='App-header'>
        <h1>¡Trabajando con promesas!</h1>
        <PrincipalComponent />
      </div> 
    </div>
  )

}

export default App;
