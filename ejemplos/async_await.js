'use strict';

// función que retorna una promesa
function sleep(ms) {
  return new Promise((resolve, reject) => {
    // aqui va el código que hará resolverse o rechazarse la promesa
    setTimeout(() => {
      resolve(56);
      //reject(new Error('fatal'));
    }, ms);
  });
}

// consumir la promesa
// IIFE - Inmediatelly invoked function expression
(async () => {

  console.log('empezo');

  //JSON.parse('78fs7d86f'); // el .catch de abajo recoge tambien errores en código síncrono

  const resultado = await sleep(2000);
  console.log(resultado);

  // si una promesa hace reject a un await es como si hubiera un throw

  for(let i = 0; i < 5; i++) {
    console.log('espero 1 segundo');
    await sleep(1000);
  }

  console.log('fin');

})().catch(err => {
  console.log('Hubo un error', err);
});

