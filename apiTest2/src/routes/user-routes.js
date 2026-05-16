const express = require('express')
const userRoute = express.Router()
const UserController = require('../controllers/UserController')

userRoute.get('/', UserController.index)
userRoute.get('/:id', UserController.search)
userRoute.post('/', UserController.create)
userRoute.delete('/:id', UserController.remove)
userRoute.patch('/:id', UserController.change)

module.exports = userRoute