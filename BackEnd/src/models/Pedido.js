const { Model, DataTypes } = require('sequelize');

class Pedido extends Model {
    static init (sequelize){
        super.init({
            endereco: DataTypes.STRING,
            sabores: DataTypes.STRING,
            bebidas: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}
module.exports = Pedido;