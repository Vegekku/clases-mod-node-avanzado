'use strict';

const Usuario = require('../models/Usuario');
const namedRoutes = require('../lib/namedRoutes')

class PrivadoController {
  index (req, res, next) {
    res.render('privado');
  }

  async enviaEmail(req, res, next) {
    try {
      //recuperar el texto a enviar del body
      const texto = req.body.texto;

      //recuperar usuario logueado
      const usuario = await Usuario.findById(req.session.authUser._id);

      //siempre deberíamos encontrar el usuario, porque para llegar aquí, el usuario ha debido loguearse

      //mandarle un email
      await usuario.sendEmail('admin@nodeapi.com', 'Prueba de email', `Has usado el texto: ${texto}`);

      //responder
      res.redirect(namedRoutes.privado);
    } catch (err) { return next(err); }
  }
}