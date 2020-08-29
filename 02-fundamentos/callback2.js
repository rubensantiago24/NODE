let empleados = [{
        id: 1,
        nombre: 'Ruben'
    },
    {
        id: 2,
        nombre: 'Bob esponja'
    },
    {
        id: 3,
        nombre: 'Ben 10'
    }
];

let salarios = [{
        id: 1,
        salario: 800
    },
    {
        id: 2,
        salario: 500
    }
];

let getSalario = (empleado, callback) => {
    let salarioBD = salarios.find(salario => salario.id === empleado.id)

    if (!salarioBD) {
        callback(`No se encontró un salario para el usuario ${empleado.nombre}`)
    } else {
        callback(null, {
            nombre: empleado.nombre,
            salario: salarioBD.salario,
            id: empleado.id
        });
    }
}



let getEmpleado = (id, callback) => {
    let empleadoBD = empleados.find(empleado => empleado.id == id)

    if (!empleadoBD) {
        callback(`No exite un empleado con el id ${id}`)
    } else {
        callback(null, empleadoBD);
    }
}

getEmpleado(2, (err, empleado) => {

    if (err) {
        return console.log(err);
    }
    // console.log(empleado);

    getSalario(empleado, (err, res) => {
        if (err) {
            return console.log(err);
        };

        console.log(`El salario de ${res.nombre} es de ${res.salario}$`);
    })
});