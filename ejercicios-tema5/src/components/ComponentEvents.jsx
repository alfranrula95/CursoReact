import React, { useState } from 'react';
import './../App.css';

function ComponentEvents() {

    const [resultado, setResultado] = useState('');
    const [stopColor, setStopColor] = useState(false);

    const manejarPulsacionesTeclado = (event) => {
        setResultado(event.target.value);
    }

    const manejarDown = (event) => {
        if (event.keyCode === 8) {
            setResultado(event.target.value);
        }
    }

    const capturarRaton = (event) => {
        if (!stopColor) {
            if (event.clientX > 300 && event.clientY < 150) {
                document.getElementById('cuadroColores').style.backgroundColor = '#32a852';
            }
            if (event.clientX < 300 && event.clientY < 150) {
                document.getElementById('cuadroColores').style.backgroundColor = '#ebdf05';
            }
            if (event.clientX < 300 && event.clientY > 150) {
                document.getElementById('cuadroColores').style.backgroundColor = '#0e1dc2';
            }
            if (event.clientX > 300 && event.clientY > 150) {
                document.getElementById('cuadroColores').style.backgroundColor = '#d10d4b';
            }
        }
    };

    const getRandomColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    const setColor = (event) => {
        if (!stopColor) {
            document.getElementById('cuadroInterior').style.backgroundColor = getRandomColor();
        }
    }

    const stopColorear = (event) => {
        setStopColor(!stopColor);
    }

    return (
        <div >
            <header >
                <p>{resultado}</p>
                <br></br>
                <input type="text" onKeyPress={manejarPulsacionesTeclado} onKeyDown={manejarDown} />

                <div className="cuadroColores" onMouseMove={capturarRaton} id="cuadroColores">
                    <div className="cuadroInterior" onMouseEnter={setColor}
                        onMouseLeave={setColor} id="cuadroInterior" onDoubleClick={stopColorear}></div>
                </div>
            </header>
        </div>
    );
}

export default ComponentEvents;