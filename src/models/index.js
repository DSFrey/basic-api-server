'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const cymbalSchema = require('./cymbal.schema');

const DATABASE_URL = process.env.DATABASE_URL;

const sequelizeDatabase = new Sequelize(DATABASE_URL);

const CymbalModel = cymbalSchema(sequelizeDatabase, DataTypes);

module.exports = { sequelizeDatabase, CymbalModel};
