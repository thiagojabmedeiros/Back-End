const express = require('express')
const addressRoutes = express.Router()
const AddressController = require('../controllers/AddressController')
const addressController = new AddressController()

addressRoutes.get('/addresses', addressController.index)
addressRoutes.get('/:userId/addresses', addressController.search)
addressRoutes.post('/:userId/address', addressController.create)
addressRoutes.patch('/:userId/adresses/:id', addressController.change)
addressRoutes.delete('/:userId/adresses/:id', addressController.remove)

module.exports = addressRoutes