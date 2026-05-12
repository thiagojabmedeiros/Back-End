const userRoutes = require('./user-routes')
const express = require('express')

const routes = express.Router()

routes.use('/users', userRoutes)

module.exports = routes