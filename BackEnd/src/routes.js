const express = require('express');

const routes = express.Router();

const PizzaController = require('./controllers/PizzaController');
const PedidoController = require('./controllers/PedidoController');

routes.post('/createPizza', PizzaController.create);
routes.post('/pizza/:id_pizza/editar', PizzaController.edit);
routes.get('/pizza/todas', PizzaController.all);

routes.post('/criarpedido', PedidoController.criarpedido);
routes.get('/allpedidos', PedidoController.all);
routes.delete('/:id_pedido/delete', PedidoController.dropa);

module.exports = routes;