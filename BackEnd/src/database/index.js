const Sequelize = require('sequelize');
const dbConfig = require('../configDb/database');

const Pizza = require('../models/Pizza');

const connection = new Sequelize(dbConfig);

Pizza.init(connection);

module.exports = connection;