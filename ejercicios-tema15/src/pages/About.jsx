import { useHistory } from "react-router";

export default function About() {
    const history = useHistory();
    return (
        <div >
            <h1>Pagina About</h1>
            <p>{window.history.state.mensaje}</p>
            <p>{history.location.state.mensaje}</p>
        </div>
    );
}