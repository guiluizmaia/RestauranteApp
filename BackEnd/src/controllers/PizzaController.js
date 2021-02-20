const Pizza = require('../models/Pizza');

module.exports = {
    async all(req, res){
        const pizzas = await Pizza.findAll();

        return res.json(pizzas);
    },

    async edit(req, res){
        const { id_pizza } = req.params;

        const pizza = await Pizza.findByPk(id_pizza);
        /*const pizza = await Pizza.update

        const teste = await pizza.build({ sabor: 'teste'});*/

        pizza.sabor = 'teste';
        await pizza.save();
        return res.json(pizza);
    },

    async create(req, res){
        const { sabor, descricao, preco } = req.body;

        const pizza = await Pizza.create({sabor, descricao, preco });

        return res.send(pizza)
    },


}