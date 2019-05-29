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

  // cuántos mensajes quiero procesar en paralelo
  channel.prefetch(1);

  channel.consume(queueName, msg => {
    console.log(msg.content.toString());
    channel.ack(msg);
  })
}