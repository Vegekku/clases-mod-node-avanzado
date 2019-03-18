'use strict';

function suma(a, b, unCallback) {
  const resultado = a + b;
  unCallback(resultado);
}

suma(3, 5, function(resultado) { 
  console.log(resultado);
});
