import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { borrarMensaje, cerrarSesion, crearMensaje, inciarSesion, leerMensaje, vaciarMensajes } from '../redux/actions';
import MensajesHeader from '../components/MensajesHeader';
import MensajesTable from '../components/MensajesTable';
import './Mensajes.view.scss';
import SesionHeader from '../components/SesionHeader';

export default function Mensajes(props) {
    const mensajes = useSelector((state) => state.mensajes);  
    let toggler = useSelector((state) => state.controlSesion);  
    const dispatch = useDispatch();

    let nuevoMensaje = (asunto, mail, texto) => {

        let nuevo = {
            "asunto": asunto,
            "email": mail,
            "mensaje": texto,
            "leido": false
        };

        dispatch(crearMensaje(nuevo));

    };

    let eliminarMensajes = () => {
        dispatch(vaciarMensajes());
    };

    let eliminarMensaje = (index) => {
        dispatch(borrarMensaje(index));
    };

    let leer = (index) => {
        dispatch(leerMensaje(index));
    };

    let toggleControl = (bool) => {
        if (bool) {
            dispatch(inciarSesion());
        }else {
            dispatch(cerrarSesion());
        }
    }

    return (
        <div className="Mensajes">
            <SesionHeader toggle={toggleControl} /> 
            {toggler && <MensajesHeader clickNuevo={nuevoMensaje} clickEliminar={eliminarMensajes}>
            </MensajesHeader>}

            {toggler && <MensajesTable mensajes={mensajes}
                clickEliminarUno={eliminarMensaje} clickMarcarLeido={leer}>
            </MensajesTable>}
        </div>
    );

}