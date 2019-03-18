'use strict';

const EventEmitter = require('events');

// creamos un emisor de eventos
const emisor = new EventEmitter();

emisor.on('llamada teléfono', (quien) => {
  if (quien === 'madre') {
    return;
  }
  console.log('ring ring');
});

emisor.once('llamada teléfono', (quien) => {
  console.log('brr brr');
});

emisor.emit('llamada teléfono', 'madre');
emisor.emit('llamada teléfono', 'madre');
