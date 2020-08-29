const argv = require('yargs')
    .command('Listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];


// const { command } = require('yargs');

// Base al multiplicar manualmente.
// let base = '5';
// console.log(process.argv);

// let argv2 = process.argv;

// console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1]


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado ${archivo}`))
//     .catch(err => console.log(err))