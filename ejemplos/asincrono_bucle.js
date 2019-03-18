'use strict';

console.log('empiezo');

// función que escribe un texto en la consola tras 2 segundos
function escribeTras2Segundos(texto, callback) {
  setTimeout(() => {
    console.log(texto);
    callback();
  }, 2000);
}

// bucle asíncrono en serie
// llamar a una función n veces en serie
function serie(n, fn, callbackDeFinalizacion) {
  if (n === 0) { // he terminado
    callbackDeFinalizacion();
    return; // parar aquí
  }
  n = n - 1;
  fn(`texto${n}`, () => { // fn en este punto es escribeTras2Segundos
    serie(n , fn, callbackDeFinalizacion);
  });
}

serie(2, escribeTras2Segundos, function() {
  console.log('termino');
});
