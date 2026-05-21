const Sequelize = require('sequelize')
const dotEnv = require('dotenv')

dotEnv.config()

const database = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
})

module.exports = database