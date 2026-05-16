const { Model, DataTypes } = require('sequelize')

class Address extends Model {
    static init(sequelize) {
        super.init({
            street: DataTypes.STRING,
            number: DataTypes.INTEGER
        }, {
            sequelize,
            tableName: 'addresses'
        })
    }
    
    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
    }
}

module.exports = Address