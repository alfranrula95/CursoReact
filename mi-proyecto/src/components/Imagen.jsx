import React, { useState } from 'react';
import './../App.css';
import logo from './../logo.svg';

function Imagen() {
    const [reactLogo, setReactLogo] = useState(logo);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Eventos en React</h1>

                <img width="256" src={reactLogo} 
                onLoad={console.log("La imagen se ha cargado correctamente")} 
                onError={console.log("Error al cargar la imagen")} />

                <button onClick={() => { setReactLogo(logo) }}>Cargar correctamente el logo</button>
                
                <button onClick={() => { setReactLogo('') }}>Cargar con error el logo</button>
            </header>
        </div>
    );
}
export default Imagen;