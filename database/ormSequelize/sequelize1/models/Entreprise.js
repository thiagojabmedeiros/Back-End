const Sequelize = require('sequelize')
const database = require('../db')

const Enterprise = database.define('enterprises', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Enterprise