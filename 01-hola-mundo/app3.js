console.log('Inicio del programa');


setTimeout(function() {
    console.log('Primer TimeOut');

}, 3000);

setTimeout(function() {
    console.log('Segundo TimeOut');

}, 0);

setTimeout(function() {
    console.log('TercerTimeOut');

}, 0);


console.log('Fin del programa');