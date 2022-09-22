'use strict';

const express = require('express');
const logger = require('./middleware/logger');
const cymbalRouter = require('./routes/cymbals');
const stickRouter = require('./routes/sticks');
const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(logger);
app.use(cymbalRouter);
app.use(stickRouter);

function start(){
  app.listen(PORT, () => console.log('listening on port', PORT));
}

module.exports = { app, start };
