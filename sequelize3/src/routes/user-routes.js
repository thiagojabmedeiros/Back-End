const express = require('express')
const userRoutes = express.Router()

const UserController = require('../controllers/UserController')
const userController = new UserController()

userRoutes.post('/', userController.store)
userRoutes.get('/:id', userController.search)

module.exports = userRoutes