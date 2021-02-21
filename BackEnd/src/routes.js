const express = require('express');

const routes = express.Router();

const PizzaController = require('./controllers/PizzaController');
const PedidoController = require('./controllers/PedidoController');

routes.post('/createPizza', PizzaController.create);
routes.post('/pizza/:id_pizza/editar', PizzaController.edit);
routes.get('/pizza/todas', PizzaController.all);
routes.get('/pizza/:id_pizza', PizzaController.um);
routes.delete('/pizza/:id_pizza/deletar', PizzaController.deletar);

routes.post('/criarpedido', PedidoController.criarpedido);
routes.get('/allpedidos', PedidoController.all);
routes.delete('/pedidos/:id_pedido/delete', PedidoController.dropa);
routes.get('/pedidos/:id_pedidos', PedidoController.um);

module.exports = routes;