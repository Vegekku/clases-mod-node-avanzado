var express = require('express');
var router = express.Router();

const { query, params, body, validationResult } = require('express-validator/check');

/* GET home page. */
router.get('/', function(req, res, next) {

  const segundo = (new Date()).getSeconds();

  res.locals.saludo = '<script>alert("Hola");</script>';
  res.locals.condicion = {
    segundo: segundo,
    estado: segundo % 2 === 0
  };
  res.locals.users = [
    { name: 'Smith', age: 20 },
    { name: 'Thomas', age: 40 },
    { name: 'Jones', age: 37 }
  ];
  res.render('index');
});

router.get('/paramenruta/:algo', (req, res, next) => {
  console.log('req.params', req.params);
  res.send('ok');
});

router.get('/paramenrutaopcional/:texto?', (req, res, next) => {
  console.log('req.params', req.params);
  res.send('ok opcional');
});

router.get('/param/:id([0-9]+)/piso/:piso/puerta/:puerta(A|B|C)', (req, res, next) => {
  console.log(req.params);
  res.send('ok');
});

// http://localhost:3000/enquerystring?color=rojo&altura=20
router.get('/apiv1/enquerystring', [
  query('altura').isNumeric().withMessage('must be numeric')
], (req, res, next) => {
  validationResult(req).throw(); // lanza una excepción si hay errores de validación
  console.log('req.query', req.query);
  res.json({ success: true});
});

router.post('/enelbody', (req, res, next) => {
  console.log('req.body', req.body);
  console.log('req.get de cabecera j4', req.get('j4'));
  res.send('ok');
});

/*router.get('/variosmiddlewares', (req, res, next) => {

}, (req, res, next) => {

})*/

module.exports = router;
