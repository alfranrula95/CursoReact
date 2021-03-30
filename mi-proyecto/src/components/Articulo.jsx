import React, { Component } from 'react';
import PilasConvencionales from './Pilas';
import BateriasLitio from './Baterias';
import Hidrogeno from './Hidrogeno';
import Likes from './Likes';

class Articulo extends Component {

    render() {
        return (
            <div>
                <PilasConvencionales />
                <BateriasLitio />
                <Hidrogeno />
                <Likes />
            </div>
        )
    }
}

export default Articulo;
