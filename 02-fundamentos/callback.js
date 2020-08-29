// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: 'Ruben',
        id
    }
    if (id === 20) {
        callback(`El usuario con id ${id}, no exite en la BD`)
    } else {
        callback(null, usuario);
    }

    callback(usuario);
}

getUsuarioById(1, (err, usuario) => {

    if (err) {
        return console.log(err);
    }
    console.log('Usuario de base de datos', usuario);
});