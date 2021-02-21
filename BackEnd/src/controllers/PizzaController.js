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

    async um(req, res){
        const { id_pizza } = req.params;

        const pizza = await Pizza.findByPk(id_pizza);

        if(!pizza){ return res.status(400).send({message: 'Pizza não encontrada'}) }

        return res.json(pizza)
    },

    async deletar(req, res){
        const { id_pizza } = req.params;

        const pizza = await Pizza.destroy( 
            {  
            where: {
                id: id_pizza
            }
        });

        return res.json({pedidoDeletado: id_pizza});
    }

}