const userRoutes = require('./user-routes')
const addressRoutes = require('./address-routes')
const express = require('express')

const routes = express.Router()

routes.use('/users', userRoutes)
routes.use('/users', addressRoutes)

module.exports = routes