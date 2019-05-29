'use strict';

// Servicio de cambio de moneda

const cote = require('cote');

const responder = new cote.Responder({name: 'currency conversion responder'});

// tabla de conversión
// actua como el almacén de datos de este microservicio
const rates = {
  usd_eur: 0.86,
  eur_usd: 1.14
};

// peticion { from: 'eur', to: 'usd', amount: 27 }
responder.on('convert', (req, done) => {
  console.log('servicio: ',req.from, req.to, req.amount, Date.now());

  // calculamos el resultado
  const result = rates[`${req.from}_${req.to}`] * req.amount;
  done(result);
});