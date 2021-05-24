import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import './BarraOpciones.scss';

export default function BarraOpciones() {
    const [esDeDia, setDia] = useState(true);

    const toggleModo = () => {
        let cards;
        if (esDeDia) {
            document.getElementsByTagName("body")[0].style.backgroundColor = '#282c34';
            document.getElementsByTagName("body")[0].style.color = '#ffffff';
            cards = document.getElementsByClassName('card');
            for (let i = 0; i < cards.length; i++) {
                cards[i].style.border = '1px solid #ffffff';
            }
            setDia(!esDeDia);
        } else {
            document.getElementsByTagName("body")[0].style.backgroundColor = '#ffffff';
            document.getElementsByTagName("body")[0].style.color = '#282c34';
            cards = document.getElementsByClassName('card');
            for (let i = 0; i < cards.length; i++) {
                cards[i].style.border = '1px solid rgba(0,0,0,.125)';
            }
            setDia(!esDeDia);
        }
    }

    let texto = esDeDia ?
        (<div><FontAwesomeIcon icon={faMoon} /></div>) :
        (<div><FontAwesomeIcon icon={faSun} /></div>);



    return (

        <div className="row col-md-12 justify-content-end" >

            {!esDeDia && <button className="btn btn-light toggler" onClick={toggleModo}>
                {texto}
            </button>}
            {esDeDia && <button className="btn btn-dark toggler" onClick={toggleModo}>
                {texto}
            </button>}
        </div>
    );
}