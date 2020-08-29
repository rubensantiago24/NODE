let empleados = [{
        id: 1,
        nombre: 'Ruben'
    },
    {
        id: 2,
        nombre: 'Markus'
    },
    {
        id: 3,
        nombre: 'Eliza'
    }
];



let salarios = [{
        id: 1,
        salario: 200
    },
    {
        id: 2,
        salario: 300
    },
    // {
    //     id: 3,
    //     salario: 400
    // }
]

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {

        let empleadoBD = empleados.find(empleado => empleado.id == id)

        if (!empleadoBD) {
            reject(`No exite un empleado con el id ${id}`)
        } else {
            resolve(empleadoBD);
        }
    })
}


let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioBD = salarios.find(salario => salario.id === empleado.id)

        if (!salarioBD) {
            reject(`No se encontró un salario para el usuario ${empleado.nombre}`)
        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioBD.salario,
                id: empleado.id
            });
        }
    })
}

//PRIMER Ejemplo(Promesas con dos promesas)
// getEmpleado(2).then(empleado => {
//     // console.log('Empleado de BD', empleado);

//     getSalario(empleado).then(resp => {
//             console.log(`El salario de  ${resp.nombre} es de ${resp.salario} $`);
//         }, err =>
//         console.log(err))

// }, (err) => console.log(err))


getEmpleado(10).then(empleado => {
        return getSalario(empleado);
    })
    .then(resp => {
        console.log(`El salario de ${resp.nombre} es de ${resp.salario}`);
    })
    .catch(err => {
        console.log(err);
    })