'use strict';

const axios = require('axios');

async function main() {
  // consulta http a un API
  const httpResponse = await axios.get('http://localhost:3000/apiv1/agentes');
  console.log(httpResponse.data);
}

main().catch(err => {
  console.log('Hubo un error:', err);
});
