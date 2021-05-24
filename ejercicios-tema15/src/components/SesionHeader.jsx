import './SesionHeader.scss';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { selectarProducto, setearLista } from '../redux/actions';
import { useHistory } from "react-router";
import { LinkPropio } from './LinkPropio';
import context from '../context/context';

export default function SesionHeader(props) {
   // let toggler = useSelector((state) => state.iniciado);
    const dispatch = useDispatch();
    const history = useHistory();
    const contexter = useContext(context);

    let cierra = (event) => {
        console.log('cerrando');
        dispatch(setearLista([]));
        dispatch(selectarProducto(null));
        //dispatch(cerrarSesion());
        contexter.logout()
        history.push('/');
    }

    return (
        <div className="row col-md-12">
            <ul className="nav">
                <li className="nav-item">
                    <LinkPropio href='/about' className="nav-link"  >
                        Navegar al About
                    </LinkPropio>
                </li>
                <li className="nav-item">
                    <LinkPropio href='/store' className="nav-link">
                        Store
                    </LinkPropio>
                </li>
                <li className="nav-item">
                    <button onClick={cierra} className="btn btn-outline-danger">Log out</button>
                </li>
            </ul>

        </div>
    )
}
