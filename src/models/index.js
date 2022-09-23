'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const cymbalSchema = require('./cymbal.schema');
const stickSchema = require('./stick.schema');

const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory'
  : process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const CymbalModel = cymbalSchema(sequelizeDatabase, DataTypes);
const StickModel = stickSchema(sequelizeDatabase, DataTypes);

module.exports = { sequelizeDatabase, CymbalModel, StickModel };
