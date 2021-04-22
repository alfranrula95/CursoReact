
import './Store.scss';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
/*
export default function Store() {
    /*
  return (
    <div className="Store">
      <h1>Bienvenido a mi tienda</h1>
    </div>
  );
}*/
    /*let abrirProducto = () => {
        // Nos devuelve un producto con ID entre 1 y 20 (Ambos incluidos).
        return '/product/' + Math.floor(Math.random() * 20 + 1)
    }

    return (
        <div className="Store">
            <h1>Bienvenido a mi tienda</h1>

            <Link className="Product-link" to={abrirProducto()}>
                Ir al producto
            </Link>
        </div>
    );*/
    /*
let abrirProducto = () => {
    let id = Math.floor(Math.random() * 20 + 1);

    // Nos devuelve un producto con ID entre 1 y 20 (Ambos incluidos).
    return {
        pathname: '/product/' + id,
        state: {
            id: id,
            vistoEnStore: true,
            enOferta: false
        }
    }
}
/*
return (
    <div className="Store">
        <h1>Bienvenido a mi tienda</h1>

        <Link className="Product-link" to={abrirProducto()}>
            Ir al producto
        </Link>
    </div>
);
    */
export default function Store(props) {
    let abrirProducto = () => {
        let id = Math.floor(Math.random() * 20 + 1);

        // Nos devuelve un producto con ID entre 1 y 20 (Ambos incluidos).
        props.history.push({
            pathname: '/product/' + id,
            state: {
                id: id,
                vistoEnStore: true,
                enOferta: false
            }
        })
    }
    return (
        <div className="Store">
            <h1>Bienvenido a mi tienda</h1>

            <button className="Product-link" onClick={abrirProducto}>
                Ir al producto
          </button>
        </div>
    );
}