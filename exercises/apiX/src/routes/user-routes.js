const UserController = require('../controllers/UserController')
const userController = new UserController()

const express = require('express')
const userRoutes = express.Router()

userRoutes.get('/', userController.index)
userRoutes.post('/', userController.create)

module.exports = userRoutes