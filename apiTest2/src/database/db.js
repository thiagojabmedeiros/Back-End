const configs = require('../config/config')
const User = require('../models/User')
const Address = require('../models/Address')
const Tech = require('../models/Tech')

const Sequelize = require('sequelize')

const database = new Sequelize(configs.development)

User.init(database)
Address.init(database)
Tech.init(database)

User.associate(database.models)
Address.associate(database.models)
Tech.associate(database.models)

module.exports = database