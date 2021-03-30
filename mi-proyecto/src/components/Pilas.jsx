import React from 'react';
import Autonomia from './Autonomia';
import Carga from './Carga';

function PilasConvencionales() {
    return (
        <div>
            <h3>Pilas convencionales</h3>
            <p>
                A pesar del auge de las energias renovables,
                las pilas convencionales siguen utilizandose a diario.
            </p>
            <br />
            <Autonomia km={0} />
            <Carga carga='No' />
        </div>
    );

}

export default PilasConvencionales;