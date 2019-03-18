'use strict';

const express = require('express');
const router = express.Router();
const Agente = require('../../models/Agente');

/**
 * GET /agentes
 * Obtener una lista de agentes
 * 
 */
router.get('/', async (req, res, next) => {
  try { // protejemos el código para recoger posibles excepciones
    
    // Recogemos valores de entrada
    const name = req.query.name;
    const age = req.query.age;
    const skip = parseInt(req.query.skip);
    const limit = parseInt(req.query.limit);
    const fields = req.query.fields;
    const sort = req.query.sort;

    const filter = {};

    if (name) {
      filter.name = name;
    }

    if (age) {
      filter.age = age;
    }

    // buscamos agentes en la base de datos
    const agentes = await Agente.listar(filter, skip, limit, fields, sort);

    res.json({ success: true, results: agentes });

  } catch(err) {
    next(err);
    return;
  }
});

/**
 * GET /agentes/:id
 * Obtener un agente
 */
router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;

    const agente = await Agente.findById(id).exec();
    
    res.json({ success: true, result: agente });

  } catch (err) {
    next(err);
    return;
  }
});

/**
 * POST /agentes
 * Crear un agente
 */
router.post('/', async (req, res, next) => {
  try {
    const data = req.body;

    const agente = new Agente(data);

    const agenteGuardado = await agente.save();    

    res.json({ success: true, result: agenteGuardado });

  } catch(err) {
    next(err);
    return;
  }
});

/**
 * PUT /agentes/:id
 * Actualiza un agente
 */
router.put('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const agenteActualizado = await Agente.findOneAndUpdate({ _id: id}, data, { new: true }).exec();
    // { new: true } solicita que retorne el documento actualizado

    res.json({ success: true, result: agenteActualizado });

  } catch (err) {
    next(err);
    return;
  }
});

/**
 * DELETE /agentes/:id
 * Elimina un agente
 */
router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;

    await Agente.deleteOne({ _id: id }).exec();

    res.json({ success: true });

  } catch (err) {
    next(err);
    return;
  }
});

module.exports = router;
