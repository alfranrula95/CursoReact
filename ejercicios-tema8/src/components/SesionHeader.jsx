import './SesionHeader.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { LinkPropio } from './LinkPropio';

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
                {toggler && <button onClick={cierra} className="Logged">Log out</button>}
            </div>

            <LinkPropio href='/about' className="Nav-link" >
                Navegar al About
            </LinkPropio>
        </div>
    )
}
