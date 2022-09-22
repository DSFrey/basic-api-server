'use strict';

const express = require('express');
const router = express.Router();
const { CymbalModel } = require('../models');

router.post('/cymbal', async (req, res, send) => {
  console.log(req.body);
  const newCymbal = await CymbalModel.create(req.body);
  res.status(200).send(newCymbal);
});

module.exports = router;
