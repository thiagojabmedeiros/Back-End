const express = require('express')
const addressRoutes = express.Router()
const AddressController = require('../controllers/AddressController')
const addressController = new AddressController()

addressRoutes.get('/', addressController.index)
addressRoutes.get('/:userId', addressController.search)
addressRoutes.post('/:userId', addressController.create)
addressRoutes.patch('/:userId/:id', addressController.change)
addressRoutes.delete('/:userId/:id', addressController.remove)

module.exports = addressRoutes