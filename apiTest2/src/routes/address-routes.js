const express = require('express')
const addressRoutes = express.Router()
const AddressController = require('../controllers/AddressController')
const addressController = new AddressController()

addressRoutes.get('/:userId/addresses', addressController.index)
addressRoutes.get('/:userId/addresses/:id', addressController.search)
addressRoutes.post('/:userId/addresses', addressController.create)
addressRoutes.patch('/:userId/addresses/:id', addressController.change)
addressRoutes.delete('/:userId/addresses/:id', addressController.remove)

module.exports = addressRoutes