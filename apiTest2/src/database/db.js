const configs = require('../config/config')

const Sequelize = require('sequelize')

const database = new Sequelize(configs.development)

module.exports = database