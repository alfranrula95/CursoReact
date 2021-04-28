import _axios from "axios";

const axios = _axios.create({
    baseURL: "https://fakestoreapi.com/products",
    responseType: "json"
});

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

const GETAllProductos = () => {
    console.log('buscando todos los productos');
    return axios.get().then(response => response.data);
}

const GETProducto = (id) => {
    console.log(id);
    return axios.get("/" + id).then(response => response.data);
}

export { GETAllProductos, GETProducto };