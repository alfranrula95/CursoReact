import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { inciarSesion } from '../redux/actions';

import './Login.scss';

export default function LoginPage() {
    const [username, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    let submit = (event) => {

        if (window.localStorage.getItem(username)) {
            const auxPass = window.localStorage.getItem(username);
            if (auxPass === pass) {
                setError(false);
                dispatch(inciarSesion());
                history.push("/mensajes");
            }else {
                setError(true);
            }
        }else {
            setError(true);
        }

    }

    let gotoRegister = (event) => {
        setError(false);
        history.push("/registro");
    }

    let handleUser = (event) => {
        setError(false);
        setUser(event.target.value);
    };

    let handlePass = (event) => {
        setError(false);
        setPass(event.target.value);
    };

    return (
        <div className="Store">
            <h1>Log in</h1>
            <div className="formulario">
                <label>Username</label>
                <input type="text" name="username" onChange={handleUser}></input>
                <label>Password</label>
                <input type="password" name="password" onChange={handlePass}></input>
            </div>
            <div className="divBtns">
                <button onClick={submit} type="submit"  >Log in</button>
                <button onClick={gotoRegister} >Registrate</button>
            </div>
            {error && <p>Credenciales incorrectas</p>}
        </div>
    );
}