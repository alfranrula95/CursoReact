import { render } from "@testing-library/react";
import Mensajes from "../views/Mensajes.view";

export default function MensajesPage() {
    return (
        <div className="Store">
            <h1>Bienvenido a mi tienda</h1>
            <Mensajes /> 
        </div>
    );
}