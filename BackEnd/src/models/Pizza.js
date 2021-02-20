const { Model, DataTypes } = require('sequelize');

class Pizza extends Model {
    static init(sequelize){
        super.init({
            sabor: DataTypes.STRING,
            descricao: DataTypes.STRING,
            preco: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Pizza;