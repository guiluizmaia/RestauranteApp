const Pizza = require('../models/Pizza');

module.exports = {
    async all(req, res){
        const pizzas = await Pizza.findAll();

        return res.json(pizzas);
    },

    async edit(req, res){
        const { id_pizza } = req.params;
        const { pizza } = req.body;

        const pizzaBusca = await Pizza.findByPk(id_pizza);
        
        if(pizza.newSabor){
            pizzaBusca.sabor = pizza.newSabor;
        }
        if(pizza.newDescricao){
            pizzaBusca.descricao = pizza.newDescricao;
        }
        if(pizza.newPreco){
            pizzaBusca.preco = pizza.newPreco;
        }

        await pizzaBusca.save();

        return res.json(pizzaBusca);
    },

    async create(req, res){
        const { sabor, descricao, preco } = req.body;

        const pizza = await Pizza.create({sabor, descricao, preco });

        return res.send(pizza)
    },


}