import { useParams } from 'react-router-dom';
import './Product.scss';

/*export default function Product() {
  let { id } = useParams();

  return (
    <div className="Product">
      <p>Aquí irán los datos del producto: <strong>{id}</strong></p>
    </div>
  );
}*/
/*
export default function Product() {
  let { MODIFICABLE } = useParams();

  return (
    <div className="Product">
      <p>Aquí irán los datos del producto: <strong>{MODIFICABLE}</strong></p>
    </div>
  );
}*/

export default function Product(props) {
  let { id, vistoEnStore, enOferta } = props.history.location.state;

  return (
    <div className="Product">
      <div><strong>Aquí irán los datos del producto:</strong> {id}</div>
      <div><strong>Visto en la tienda:</strong> {(vistoEnStore) ? 'SI' : 'NO'}</div>
      <div><strong>En oferta:</strong> {(enOferta) ? 'SI' : 'NO'}</div>
    </div>
  );
}