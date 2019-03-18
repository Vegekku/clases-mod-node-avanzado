'use strict';

// constructor de objetos
function Coche(ruedas) {
  this.ruedas = ruedas;
  this.cuantasRuedas = () => {
    console.log('tiene', this.ruedas, 'ruedas');
  };
}

const todoterreno = new Coche(4);

const pintaRuedas = todoterreno.cuantasRuedas;
// todoterreno.cuantasRuedas(); // si tiene this
 pintaRuedas(); // no tiene this

setTimeout(todoterreno.cuantasRuedas.bind(todoterreno), 2000);
