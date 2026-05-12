const Sequelize = require('sequelize')
const Model = Sequelize.Model
const DataTypes = Sequelize.DataTypes

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            sequelize,
            'tableName': 'users'
        })
    }
}

module.exports = User