import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import context from '../context/context';
import './Login.scss';

export default function LoginPage() {
    const [username, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(false);
    const history = useHistory();
    //const dispatcher = useDispatch();
    const contexter = useContext(context);
    //const [logger, dispatch] = useReducer(reducerLogger, initialStateLogger);

    let submit = (event) => {

        if (window.localStorage.getItem(username)) {
            const auxPass = window.localStorage.getItem(username);
            if (auxPass === pass) {
                setError(false);
                // dispatcher(inciarSesion());
                contexter.login();
                
                history.push("/store");
            } else {
                setError(true);
            }
        } else {
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
        <div className="row col-md-12 justify-content-center">
        <div className="col-md-6 card">
            <h1>Log in</h1>
            <div className="col-md-12">
                <label className="form-label">Username</label>
                <input type="text"  className="form-control" name="username" onChange={handleUser}></input>
                <label className="form-label">Password</label>
                <input type="password"  className="form-control" name="password" onChange={handlePass}></input>
            </div>
            <div className="col-md-12 justify-content-center">
                <button className="btn btn-primary botones" onClick={submit} type="submit"  >Log in</button>
                <button className="btn btn-secondary botones" onClick={gotoRegister} >Registrate</button>
            </div>
            {error && <p>Credenciales incorrectas</p>}
        </div>
        </div>
    );
}