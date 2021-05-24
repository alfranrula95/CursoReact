import { useState } from 'react';
import { useHistory } from 'react-router';
import './Login.scss';

export default function RegistroPage() {
    const [username, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);
    const [error1, setError1] = useState(false);
    const history = useHistory();

    let handleUser = (event) => {
        setError(false);
        setError1(false);
        setUser(event.target.value);
    };

    let handlePass = (event) => {
        setError(false);
        setError1(false);
        setPass(event.target.value);
    };

    let submit = (event) => {

        if (!window.localStorage.getItem(username)) {
            setError1(false);
            if (pass.length < 5) {
                setError(true);
            } else {
                setError(false);
                window.localStorage.setItem(username, pass);
                history.push("/");
            }
        } else {
            setError1(true);
        }

    }

    return (
        <div className="row col-md-12 justify-content-center">
            <div className="col-md-6 card">
                <h1>Registro</h1>
                <div className="col-md-12">
                    <label className="form-label">Username</label>
                    <input type="text" name="username" className="form-control" onChange={handleUser}></input>
                    <label className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" onChange={handlePass}></input>
                </div>
                <div className="col-md-12 justify-content-center">
                    <button className="btn btn-primary botones" onClick={submit} type="submit"  >Registrar</button>
                </div>
                {error && <p>La contraseña ha de tener minimo 5 caracteres</p>}
                {error1 && <p>El username introducido ya existe</p>}
            </div>
        </div>
    );
}