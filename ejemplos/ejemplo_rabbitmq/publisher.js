'use strict';

const connectionPromise = require('./connectAMQP');

const queueName = 'tareas';

main().catch(err => { console.log('Hubo un error', err)});

async function main() {
  //conectamos con servidor AMQP
  const conn = await connectionPromise;

  // conectar un canal
  const channel = await conn.createChannel();

  // asegurar que la cola existe
  await channel.assertQueue(queueName, {
    durable: true // la cola sobrevive a reinicios del broker
  });

  let sendAgain = true;

  setInterval(async () => {
    try {
      // mandar un mensaje
      const mensaje = {
        texto: 'la tarea creada ' + Date.now()
      }

      // antes de mandar el siguiente mensaje, verifico si puedo hacerlo
      if (!sendAgain) {
        console.log('Esperando a evento drain...');
        await new Promise((resolve, reject) => channel.on('drain', resolve));
      }

      sendAgain = channel.sendToQueue(queueName, Buffer.from(JSON.stringify(mensaje)),
      {
        persistent: true // el mensaje sobrevive a reinicios
      });

      console.log(`publicado ${mensaje.texto} con resultado ${sendAgain}`);
    } catch(err) {
      console.log(err);
      process.exit(1);
    }
  }, 10);
}