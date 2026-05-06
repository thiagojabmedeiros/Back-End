const Sequelize = require('sequelize')
const config = require('../config/config')
const User = require('../models/User')

const database = new Sequelize(config.development)

User.init(database)

module.exports = database