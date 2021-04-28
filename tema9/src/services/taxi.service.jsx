export const recojer = () => {
    return viaje(true);
}

const viaje = (enDestino) => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => {
                console.log('Código del estado de la petición: ', response.status);
                console.log('Headers de la petición: ', response.headers);
                console.log('Tipo de la petición: ', response.type);

                return response.json(); // Datos solicitados, en formato JSON.
            })
            .then(data => {
                console.log("✅ Hemos recibido los datos correctamente: ", data);
            })
            .catch(error => {
                console.error("❌ Algo ha ido mal con la petición...", error);
            });
    });
}