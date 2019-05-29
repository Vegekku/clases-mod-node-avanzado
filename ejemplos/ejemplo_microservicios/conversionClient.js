'use strict';

// cliente de conversión de monedas

const cote = require('cote');

const requester = new cote.Requester({name: 'currency conversion requester'});

const conversion = {
  amount: 100,
  from: 'usd',
  to: 'eur'
}

setInterval(() => {
  requester.send({
    type: 'convert',
    ...conversion
  }, response  => {
    console.log(`cliente: ${conversion.amount} ${conversion.from} --> ${response} ${conversion.to}`, Date.now());
  });
}, 1000);

