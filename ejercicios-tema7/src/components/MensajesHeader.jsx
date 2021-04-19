import { useState } from 'react';
import './MensajesHeader.scss';

export default function MensajesHeader(props) {
  const [asunto, setAsunto] = useState('');
  const [mail, setMail] = useState('');
  const [texto, setTexto] = useState('');
  const [validacionAsunto, setAsuntoValido] = useState(false);
  const [validacionMail, setMailValido] = useState(false);
  const [validacionTexto, setTextoValido] = useState(false);

  let handleAsunto = (event) => {
    if (event.target.value.length === 0) {
      setAsuntoValido(false);
    } else {
      setAsuntoValido(true);
    }
    setAsunto(event.target.value);
  };
  let handleMail = (event) => {
    if (emailValidation(event.target.value)) {
      setMailValido(true);
    } else {
      setMailValido(false);
    }
    setMail(event.target.value);
  };
  let handleTexto = (event) => {
    if (event.target.value.length <= 10) {
      setTextoValido(false);
    } else {
      setTextoValido(true);
    }
    setTexto(event.target.value);
  };

  const emailValidation = (email) => {

    return (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email));
  };

  let submit = (event) => {
    if (validacionAsunto && validacionMail && validacionTexto) {
      props.clickNuevo(asunto, mail, texto);
    }
  }

  return (
    <div className="MensajesHeader">
      <div className="divFormulario">
        <div className="divInput">
          <input className="input" placeholder="Introduce tu asunto..."
            type="text" name="asunto" onChange={handleAsunto}
          />
          {!validacionAsunto && <p className="input">Por favor introduce un asunto</p>}
        </div>
        <div className="divInput">
          <input className="input" placeholder="Introduce tu asunto..."
            type="text" name="mail" onChange={handleMail}
          />

          {!validacionMail && <p className="input">EL formato del mail no es correcto</p>}
        </div>
        <div className="divInput">
          <input className="input" placeholder="Introduce tu asunto..."
            type="text" name="text" onChange={handleTexto}
          />
          {!validacionTexto && <p className="input">La longitud del texto ha de ser minimo de 10 caracteres</p>}
        </div>
        <button onClick={submit} type="submit" className="Nuevo">Nuevo</button>
        <button onClick={props.clickEliminar} className="Vaciar">Vaciar</button>
      </div>
    </div>
  );
}