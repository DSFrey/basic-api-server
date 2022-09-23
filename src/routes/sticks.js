'use strict';

const express = require('express');
const router = express.Router();
const { StickModel } = require('../models');
const errorHandler = require('../error-handlers/500');

router.post('/stick', async (req, res, send) => {
  try {
    console.log(req.body);
    const newStick = await StickModel.create(req.body);
    res.status(200).send(newStick);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

router.get('/stick', async (req, res, send) => {
  try {
    const allSticks = await StickModel.findAll();
    res.status(200).send(allSticks);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

router.get('/stick/:id', async (req, res, send) => {
  try {
    const id = req.params.id;
    const oneStick = await StickModel.findAll({ where: { id } });
    res.status(200).send(oneStick);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

router.put('/stick/:id', async (req, res, send) => {
  try {
    const id = req.params.id;
    await StickModel.update(req.body, { where: { id } });
    const oneStick = await StickModel.findAll({ where: { id } });
    res.status(200).send(oneStick);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

router.delete('/stick/:id', async (req, res, send) => {
  try {
    const id = req.params.id;
    await StickModel.destroy({ where: { id } });
    const oneStick = await StickModel.findAll({ where: { id } });
    res.status(200).send(oneStick);
  } catch (error) {
    errorHandler(error, req, res);
  }
});

module.exports = router;
