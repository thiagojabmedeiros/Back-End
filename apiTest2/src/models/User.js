const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            sequelize,
            tableName: 'users'
        })
    }

    static associate(models) {
        this.hasMany(models.Address, { foreignKey: 'userId', as: 'addresses' })
    }
}

module.exports = User