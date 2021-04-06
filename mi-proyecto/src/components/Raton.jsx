import React from 'react';
import './../App.css';

function Raton() {
    let manejaEntraRaton = (event) => {
        console.log("Entra el ratón", event);
    };

    let manejaSaleRaton = (event) => {
        console.log("Sale el ratón", event);
    };

    let manejaClickRaton = (event) => {
        console.log(`El usuario pulsa en x: ${event.clientX}, y: ${event.clientY}`);
    };

    return (
        <div className="App">
            <header className="App-header">
                <button
                    onMouseEnter={manejaEntraRaton}
                    onMouseLeave={manejaSaleRaton}
                    onClick={manejaClickRaton}>
                    Pruebas con Eventos de ratón
        </button>
            </header>
        </div>
    );
}
export default Raton;