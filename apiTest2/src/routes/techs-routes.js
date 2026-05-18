const express = require('express')
const techRoutes = express.Router()
const TechController = require('../controllers/TechController')
const techController = new TechController()

techRoutes.get('/:userId/techs', techController.index)
techRoutes.get('/:userId/techs/:id', techController.search)
techRoutes.post('/:userId/techs', techController.create)
techRoutes.patch('/:userId/techs/:id', techController.change)
techRoutes.delete('/:userId/techs', techController.remove)

module.exports = techRoutes