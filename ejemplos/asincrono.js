'use strict';

console.log('empiezo');

// función que escribe un texto en la consola tras 2 segundos
function escribeTras2Segundos(texto, callback) {
  setTimeout(() => {
    console.log(texto);
    callback();
  }, 2000);
}

escribeTras2Segundos('texto1', function() { // y cuando termines haz esto
  escribeTras2Segundos('texto2', function() { // y cuando termines haz esto
    escribeTras2Segundos('texto3', function() { // y cuando termines haz esto
      console.log('termino');
    });
  });
});


