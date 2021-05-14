import { useHistory } from "react-router";

export const LinkPropio = ({ className, href, children }) => {
    const history = useHistory();

    // Evitamos que la página se actualize y así no perder el estado.
    const onClick = (event) => {
        event.preventDefault();
        console.log('linkpropio clickado');
        window.history.pushState({ }, "", href);
        history.push(href, { });

    };

    return (
        <a className={className} href={href} onClick={onClick}>
            {children}
        </a>
    );
};