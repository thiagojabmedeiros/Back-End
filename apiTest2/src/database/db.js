const configs = require('../config/config')
const User = require('../models/User')
const Address = require('../models/Address')

const Sequelize = require('sequelize')

const database = new Sequelize(configs.development)

User.init(database)
Address.init(database)

User.associate(database.models)
Address.associate(database.models)

module.exports = database