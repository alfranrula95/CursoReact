import { useState } from 'react';
import MensajesHeader from '../components/MensajesHeader';
import MensajesTable from '../components/MensajesTable';
import './Mensajes.view.scss';

export default function Mensajes(props) {
    const [mensajes, setMensajes] = useState([]);

    let nuevoMensaje = (asunto, mail, texto) => {
        if (asunto !== '' && mail !== '' && texto !== '') {
            let nuevo = {
                "asunto": asunto,
                "email": mail,
                "mensaje": texto,
                "leido": false
            };
            setMensajes(mensajes => [...mensajes, nuevo]);
        }
        
    };

    

    let eliminarMensajes = () => {
        setMensajes([]);
    };

    let eliminarMensaje = (index) => {
        mensajes.splice(index, 1);
        setMensajes([...mensajes]);
    };

    let leerMensaje = (index) => {
        mensajes[index].leido = !mensajes[index].leido;
        setMensajes([...mensajes]);
    };

    return (
        <div className="Mensajes">
            <MensajesHeader clickNuevo={nuevoMensaje} clickEliminar={eliminarMensajes}>
            </MensajesHeader>

            <MensajesTable mensajes={mensajes} clickEliminarUno={eliminarMensaje}
                clickMarcarLeido={leerMensaje}></MensajesTable>
        </div>
    );

}