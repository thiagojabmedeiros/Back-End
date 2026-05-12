const configs = require('../config/config')
const User = require('../models/User')

const Sequelize = require('sequelize')

const database = new Sequelize(configs.development)

User.init(database)

module.exports = database