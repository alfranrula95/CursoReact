/** Devolveremos una Promesa con los
 * datos en formato JSON a solicitar */

import _axios from "axios";

const axios = _axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    responseType: "json"
});

// BASE_URL, AUTH_TOKEN y CONTENT_TYPE son variables
// que contendrán el contenido correspondiente.
/*
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = CONTENT_TYPE;
*/
// Incluimos un interceptor para las peticiones
axios.interceptors.request.use(config => {
    console.log(
        "He lanzado una petición con la siguiente configuración: ",
        config
    );

    return config;
}, error => {
    return Promise.reject(error);
});
// Incluimos un interceptor para las respuestas
axios.interceptors.response.use(response => {
    console.log(
        "He lanzado una petición con la siguiente configuración: ",
        response
    );

    const status = response.status;
    if (status < 200 || status >= 300) {
        return Promise.reject(`Response status: ${status}`);
    } else {
        return response;
    }
}, error => {
    return Promise.reject(error);
});

const GETPetition = (url) => {
    return axios.get(url).then(response => response.data);
    //return fetch(url).then(response => response.json());
}

const POSTPetition = (url, data) => {
    /*
    return fetch(url, {
        method: 'POST',
        body: data
    }).then(response => response.json());*/
    return axios.post(url, data)
      .then(response => response.data);

}

const PUTPetition = (url, data) => {
    /*
    return fetch(url, {
        method: 'PUT',
        body: data
    }).then(response => response.json());*/
    return axios.put(url, data)
      .then(response => response.data);
}

const DELETEPetition = (url) => {
    /*
    return fetch(url, {
        method: 'DELETE',
    }).then(response => `${response.status} ${response.statusText}`);*/
    return axios.delete(url)
      .then(response => `${response.status} ${response.statusText}`);
}

export { GETPetition, POSTPetition, PUTPetition, DELETEPetition };