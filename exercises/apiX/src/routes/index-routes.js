const express = require('express')
const routes = express.Router()
const userRoutes = require('./user-routes')
const projectRoutes = require('./project-routes')
const techRoutes = require('./tech-routes')

routes.use('/users', userRoutes)
routes.use('/users', projectRoutes)
routes.use('/users', techRoutes)

module.exports = routes