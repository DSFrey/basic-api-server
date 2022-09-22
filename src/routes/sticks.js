'use strict';

const express = require('express');
const router = express.Router();
const { StickModel } = require('../models');

router.post('/stick', async (req, res, send) => {
  console.log(req.body);
  const newStick = await StickModel.create(req.body);
  res.status(200).send(newStick);
});

module.exports = router;
