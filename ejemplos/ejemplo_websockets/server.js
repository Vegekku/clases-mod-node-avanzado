'use strict';

const app = require('express')();
const server = require('http').Server(app);

app.get('/', (req, res, next) => {
  // res.send('ok');
  res.sendFile(__dirname + `/index.html`);
});

server.listen(3000, () => {
  console.log('listening on port 3000');
});

// añadimos websockets
const io = require('socket.io')(server);

io.on('connection', socket => {
  console.log('nueva conexión del cliente', socket.id);
  socket.on('nuevo-mensaje', data => {
    console.log('recibido', data);
    io.emit('nuevo-mensaje', data);
  });
  setInterval(() => {
    socket.emit('pasa un segundo');
  }, 1000);
});