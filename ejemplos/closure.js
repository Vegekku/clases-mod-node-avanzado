'use strict';

// un closure es el contexto externo en donde creamos una función
function creaAgente(nombre) {
  let edad = 20;
  return {
    getNombre: function() { // esta función siempre, siempre, donde esté, podrá acceder a nombre y edad
      return nombre;
    },
    setNombre(valor) {
      nombre = valor;
    },
    saluda: function() {
      console.log('Hola soy', nombre);
    }
  }
}

const jones = creaAgente('Jones');

console.log(jones);

setTimeout(jones.saluda, 2000);
