'use strict';

// definimos un constructor de objetos
function Persona(nombre) {
  this.nombre = nombre;
}

// añadir el método saluda al prototipo de Persona
Persona.prototype.saluda = function() {
  console.log('Hola soy', this.nombre);
}

Persona.prototype.despidete = function() {
  console.log('adios soy', this.nombre);
}

const luis = new Persona('Luis');

luis.saluda();

// Hrencia de Persona -----------------------------------

function Agente(nombre) {
  // heredar el comportamiento del constructor de las Personas
  Persona.call(this, nombre);
}

// heredar propiedades y métodos de las Personas poniendo una Persona como prototipo de los agentes
Agente.prototype = Object.create(Persona.prototype); // un objeto vacio cuyo prototipo es una Persona
Agente.prototype.constructor = Agente;

// Podemos si queremos sobre escribir algunos métodos
/*Agente.prototype.saluda = function() {
  console.log('Agente saludando', this.nombre);
}*/

const smith = new Agente('Smith');

smith.saluda();

// Herencia múltiple -------------------------------------

function Superheroe() {
  this.vuela = function() {
    console.log(this.nombre, 'vuela');
  }
  this.esquivaBalas = function() {
    console.log(this.nombre, 'esquiva balas');
  }
}

// copiamos las propiedades de Superheroe al prototipo de Agente
Object.assign(Agente.prototype, new Superheroe());

smith.vuela();
smith.esquivaBalas();
