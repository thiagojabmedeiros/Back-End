const express = require('express')
const routes = express.Router()

const UserController = require('../controllers/UserController')
const userController = new UserController()

routes.post('/users', userController.create)
routes.get('/users', userController.index)
routes.get('/users/:id', userController.search)

module.exports = routes