import './SesionHeader.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function SesionHeader(props) {
    let toggler = useSelector((state) => state.controlSesion);  

    let inicia = (event) => {
        props.toggle(true);
    }

    let cierra = (event) => {
        props.toggle(false);
    }

    return (
        <div className="MensajesHeader">
            <div className="divFormulario">
                {!toggler && <button onClick={inicia} className="Logged">Log In</button>}
                {toggler && <button onClick={cierra} className="Logged">Log out</button>}
            </div>
        </div>
    )
}
