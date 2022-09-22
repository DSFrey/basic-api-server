'use strict';

const express = require('express');
const router = express.Router();
const { StickModel } = require('../models');

router.post('/stick', async (req, res, send) => {
  console.log(req.body);
  const newStick = await StickModel.create(req.body);
  res.status(200).send(newStick);
});

router.get('/stick', async (req, res, send) => {
  const allSticks = await StickModel.findAll();
  res.status(200).send(allSticks);
});

router.get('/stick/:id', async (req, res, send) => {
  const id = req.params.id;
  const oneStick = await StickModel.findAll({ where: { id } });
  res.status(200).send(oneStick);
});

router.put('/stick/:id', async (req, res, send) => {
  const id = req.params.id;
  await StickModel.update(req.body, { where: { id } });
  const oneStick = await StickModel.findAll({ where: { id } });
  res.status(200).send(oneStick);
});

router.delete('/stick/:id', async (req, res, send) => {
  const id = req.params.id;
  await StickModel.destroy({ where: { id } });
  const oneStick = await StickModel.findAll({ where: { id } });
  res.status(200).send(oneStick);
});

module.exports = router;
