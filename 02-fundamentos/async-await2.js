/*
 *Async Await 2
 */

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

let getEmpleado = async(id) => {
    let empleadoBD = empleados.find(empleado => empleado.id == id)

    if (!empleadoBD) {
        throw new Error(`No exite un empleado con el id ${id}`)
    } else {
        return empleadoBD;
    }
}


let getSalario = async(empleado) => {
    let salarioBD = salarios.find(salario => salario.id === empleado.id)

    if (!salarioBD) {
        throw new Error(`No se encontró un salario para el usuario ${empleado.nombre}`)
    } else {
        return {
            nombre: empleado.nombre,
            salario: salarioBD.salario,
            id: empleado.id
        };
    }
}


let getInformacion = async(id) => {
    let empleado = await getEmpleado(id)
    let resp = await getSalario(empleado)
    return `${resp.nombre} tiene un salario de ${resp.salario} $`
}

getInformacion(4)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error))