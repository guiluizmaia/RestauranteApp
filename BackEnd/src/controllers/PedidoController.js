const Pedido = require('../models/Pedido');
const Pizza = require('../models/Pizza');

module.exports = {

    async all(req, res){
        const pedidos = await Pedido.findAll();
        return res.json(pedidos);
    },

    async um(req, res){
        const { id_pedidos } = req.params;
        const pedido = await Pedido.findByPk(id_pedidos);

        if (!pedido) { return res.status(400).send({message: 'pedido não encontrado'}) }

        const sab = JSON.parse(pedido.sabores)
        const map = []
        for (const value of sab){
            const pizza = await Pizza.findByPk(value);
            map.push(pizza.sabor);
        }

        return res.json({pedido: pedido, sabores: map})

    },

    async dropa(req, res){
        const { id_pedido } = req.params;
        const pedidos = await Pedido.destroy({
            where: {
                id: id_pedido
            }
        });
        return res.json({pedidoDeletado: id_pedido});
    },

    async criarpedido(req, res){
        const { endereco } = req.body;

        
        const sab = req.body.sabores
        const sabores = JSON.stringify(req.body.sabores);
        const bebidas = JSON.stringify(req.body.bebidas);

        const map = []
        for (const value of sab){
            const pizza = await Pizza.findByPk(value);
            map.push(pizza.sabor);
        }
       
        
        const pedido = await Pedido.create({endereco, sabores, bebidas });
                
        return res.json({pedido: pedido, sabores: map});
        
    }
};