const { Model, DataTypes } = require('sequelize')
"use strict"
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
        this.belongsToMany(models.Tech, { foreignKey: 'userId', through: 'userTechs', as: 'techs' })
    }
}

module.exports = User