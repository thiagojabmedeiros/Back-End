const userRoutes = require('./user-routes')
const addressRoutes = require('./address-routes')
const techRoutes = require('./techs-routes')
const express = require('express')

const routes = express.Router()

routes.use('/users', userRoutes)
routes.use('/users', addressRoutes)
routes.use('/users', techRoutes)

module.exports = routes