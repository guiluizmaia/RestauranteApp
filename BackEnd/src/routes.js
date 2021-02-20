const express = require('express');

const routes = express.Router();

const PizzaController = require('./controllers/PizzaController');

routes.post('/createPizza', PizzaController.create);
routes.get('/pizza/:id_pizza/editar', PizzaController.edit);
routes.get('/pizza/todas', PizzaController.all);

module.exports = routes;