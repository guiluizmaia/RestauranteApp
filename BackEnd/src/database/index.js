const Sequelize = require('sequelize');
const dbConfig = require('../configDb/database');

const Pizza = require('../models/Pizza');
const Pedido = require('../models/Pedido');

const connection = new Sequelize(dbConfig);
  
Pizza.init(connection);
Pedido.init(connection);

module.exports = connection;