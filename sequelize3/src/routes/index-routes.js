const express = require('express')
const routes = express.Router()
const userRoutes = require('./user-routes')

routes.use('/users', userRoutes)

module.exports = routes