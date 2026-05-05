const dotEnv = require('dotenv')
dotEnv.config()

const User = require('../models/User')

const Sequelize = require('sequelize')
const { underscoredIf } = require('sequelize/lib/utils')

const database = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    define: {
        timestamps: true,
        underscored: true
    }
})

User.init(database)

module.exports = database