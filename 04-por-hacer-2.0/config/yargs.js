const argv = require('yargs')

.options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .options('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla por consola'
    })
    .options('h', {
        alias: 'hasta',
        type: 'number',
        default: false,
        describe: 'Este es el numero hasta donde quieres la tabla.'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        }
        return true;
    })


.argv;


module.exports = argv;