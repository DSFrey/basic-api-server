'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const cymbalRouter = require('./routes/cymbals');
const stickRouter = require('./routes/sticks');
const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());
app.use(logger);

app.use(cymbalRouter);
app.use(stickRouter);

app.use('*', notFound);
app.use(errorHandler);

function start(){
  app.listen(PORT, () => console.log('listening on port', PORT));
}

module.exports = { app, start };
