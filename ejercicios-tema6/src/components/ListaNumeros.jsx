import React from 'react';

export default function ListaNumeros(props) {
    const data = props.data;
    const listItems = data.map((elem, index) =>
        <li className="text-left" key={index}>
            {elem}
        </li>
    );

    return (
        <ul className="list-group">{listItems}</ul>
    );
}