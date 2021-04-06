import React from 'react';
import './../App.css';

function Touch() {
    const manejarPulsacion = (event) => {
        console.log("El tipo de este evento es: ", event.type);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Eventos en React</h1>

                <button onTouchStart={manejarPulsacion} onClick={manejarPulsacion}>
                    Púlsame
            </button>
            </header>
        </div>
    );
}
export default Touch;