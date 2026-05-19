const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize,
            tableName: 'users'
        })
    }

    static associate(models) {
        this.hasMany(models.Project, { foreignKey: 'userId', as: 'projects' })
        this.belongsToMany(models.Tech, { foreignKey: 'userId', through: 'usersTechs', as: 'techs' })
    }
}

module.exports = User