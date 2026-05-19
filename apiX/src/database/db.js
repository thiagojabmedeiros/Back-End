const User = require('../models/User')
const Project = require('../models/Project')
const Tech = require('../models/Tech')

const Sequelize = require('sequelize')
const config = require('../config/config')

const database = new Sequelize(config.development)

User.init(database)
Project.init(database)
Tech.init(database)

User.associate(database.models)
Project.associate(database.models)
Tech.associate(database.models)

module.exports = database