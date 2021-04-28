import './SesionHeader.scss';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cerrarSesion, inciarSesion, selectarProducto, setearLista } from '../redux/actions';
import { useHistory } from "react-router";
import { LinkPropio } from './LinkPropio';

export default function SesionHeader(props) {
    let toggler = useSelector((state) => state.controlSesion);
    const dispatch = useDispatch();
    const history = useHistory();

    let cierra = (event) => {
        console.log('cerrando');
        dispatch(setearLista([]));
        dispatch(selectarProducto(null));
        dispatch(cerrarSesion());
    }

    return (
        <div className="MensajesHeader">

            {toggler && <div className="divFormulario">
                <LinkPropio href='/about' className="Nav-link anchor" >
                    Navegar al About
                </LinkPropio>
                <LinkPropio href='/store' className="Nav-link anchor">
                    Store
                </LinkPropio>
                <button onClick={cierra} className="Logged">Log out</button>
            </div>}

        </div>
    )
}
