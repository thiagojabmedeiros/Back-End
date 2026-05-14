const express = require('express')
const userRoute = express.Router()
const UserController = require('../controllers/UserController')
const userController = new UserController()

userRoute.get('/', userController.index)
userRoute.get('/:id', userController.search)
userRoute.post('/', userController.create)
userRoute.delete('/:id', userController.remove)

module.exports = userRoute