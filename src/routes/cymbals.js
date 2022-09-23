'use strict';

const express = require('express');
const router = express.Router();
const { CymbalModel } = require('../models');
const errorHandler = require('../error-handlers/500');

router.post('/cymbal', async (req, res, send) => {
  try {
    console.log(req.body);
    const newCymbal = await CymbalModel.create(req.body);
    res.status(200).send(newCymbal);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

router.get('/cymbal', async (req, res, send) => {
  try {
    const allCymbals = await CymbalModel.findAll();
    res.status(200).send(allCymbals);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

router.get('/cymbal/:id', async (req, res, send) => {
  try {
    const id = req.params.id;
    const oneCymbal = await CymbalModel.findAll({ where: { id } });
    res.status(200).send(oneCymbal);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

router.put('/cymbal/:id', async (req, res, send) => {
  try {
    const id = req.params.id;
    await CymbalModel.update(req.body, { where: { id } });
    const oneCymbal = await CymbalModel.findAll({ where: { id } });
    res.status(200).send(oneCymbal);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

router.delete('/cymbal/:id', async (req, res, send) => {
  try {
    const id = req.params.id;
    await CymbalModel.destroy({ where: { id } });
    const oneCymbal = await CymbalModel.findAll({ where: { id } });
    res.status(200).send(oneCymbal);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

module.exports = router;
