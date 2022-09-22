'use strict';

const express = require('express');
const router = express.Router();
const { CymbalModel } = require('../models');

router.post('/cymbal', async (req, res, send) => {
  console.log(req.body);
  const newCymbal = await CymbalModel.create(req.body);
  res.status(200).send(newCymbal);
});

router.get('/cymbal', async (req, res, send) => {
  const allCymbals = await CymbalModel.findAll();
  res.status(200).send(allCymbals);
});

router.get('/cymbal/:id', async (req, res, send) => {
  const id = req.params.id;
  const oneCymbal = await CymbalModel.findAll({ where: { id } });
  res.status(200).send(oneCymbal);
});

router.put('/cymbal/:id', async (req, res, send) => {
  const id = req.params.id;
  await CymbalModel.update(req.body, { where: { id } });
  const oneCymbal = await CymbalModel.findAll({ where: { id } });
  res.status(200).send(oneCymbal);
});

router.delete('/cymbal/:id', async (req, res, send) => {
  const id = req.params.id;
  await CymbalModel.destroy({ where: { id } });
  const oneCymbal = await CymbalModel.findAll({ where: { id } });
  res.status(200).send(oneCymbal);
});

module.exports = router;
