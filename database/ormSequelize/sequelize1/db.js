const Sequelize = require('sequelize')
const database = new Sequelize('dockerPs1', 'docker', 'docker', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
})

module.exports = database