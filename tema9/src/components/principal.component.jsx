import { Component } from "react";
import { GETPetition, POSTPetition, PUTPetition, DELETEPetition } from "../services/http.service";

class PrincipalComponent extends Component {

    constructor() {
        super();
        this.mandarGET();
    }
    

    mandarPOST() {
        POSTPetition("https://jsonplaceholder.typicode.com/posts",
            { userID: 1, title: 'Mi primer post', body: 'Este es el cuerpo de mi post.' }
        ).then(data => {
            console.log(data);
        }).catch(error => {
            console.error("❌ Algo ha ido mal con la petición...", error);
        });
    }

    mandarGET() {
        GETPetition("https://jsonplaceholder.typicode.com/users/1").then(data => {
            console.log(data);
        }).catch(error => {
            console.error("❌ Algo ha ido mal con la petición...", error);
        });
    }

    mandarPUT() {
        PUTPetition('https://jsonplaceholder.typicode.com/posts/1', {
            id: 1, userID: 1, title: 'Post número 1', body: 'Post nuevo'
        }).then(data => {
            console.log(data);
        });
    }

    mandarDelete() {
        DELETEPetition('https://jsonplaceholder.typicode.com/users/1').then(data => {
            console.log(data);
        });
    }

    render() {
        return (
            <div>
                <button className='btn btn-primary mt-5' onClick={this.mandarGET}>
                    Llamar al GET
                </button>
                <button className='btn btn-primary mt-5' onClick={this.mandarPOST}>
                    Llamar al POST
                </button>
                <button className='btn btn-primary mt-5' onClick={this.mandarPUT}>
                    Llamar al PUT
                </button>
                <button className='btn btn-primary mt-5' onClick={this.mandarDelete}>
                    Llamar al DELETE
                </button>
            </div>
        );
    }
}
export default PrincipalComponent;