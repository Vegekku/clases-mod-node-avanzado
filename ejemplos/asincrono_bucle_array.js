'use strict';

const async = require('async');

console.log('empiezo');

// función que escribe un texto en la consola tras 2 segundos
function escribeTras2Segundos(texto, callback) {
  setTimeout(() => {
    console.log(texto);
    callback();
  }, 2000);
}

// bucle asíncrono en serie
// llamar a una función con un array en serie
function serie(arr, fn, callbackDeFinalizacion) {
  if (arr.length === 0) { // he terminado
    callbackDeFinalizacion();
    return; // parar aquí
  }
  
  fn(`texto${arr.shift()}`, () => { // fn en este punto es escribeTras2Segundos
    serie(arr , fn, callbackDeFinalizacion);
  });
}

/*serie([1, 2, 'tres', 4, 5], escribeTras2Segundos, function() {
  console.log('termino');
});*/

async.concatSeries([1, 2, 'tres', 4, 5], escribeTras2Segundos, (err, resultados) => {
  if (err) {
    console.log('Hubo un error', err);
    return;
  }
  console.log('termino');
});
