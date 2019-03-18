'use strict';

const fs = require('fs');
const path = require('path');

function versionModulo(nombreModulo, callback) {
  const fichero = path.join(__dirname, 'node_modules', nombreModulo, 'package.json');

  fs.readFile(fichero, 'utf8', (err, data) => {
    if (err) {
      callback(err);
      return;
    }

    let packageObject;
    try {
      packageObject = JSON.parse(data); // síncrono
    } catch (err) {
      callback(err);
      return;
    }

    callback(null, packageObject.version);

  });

}

versionModulo('chance', (err, version) => {
  if (err) {
    console.log('Hubo un error', err);
    process.exit(1);
  }
  console.log(`La versión del módulo chance es ${version}.`);
});
