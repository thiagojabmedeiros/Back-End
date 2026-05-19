const TechController = require('../controllers/TechController')
const techController = new TechController()

const express = require('express')
const techRoutes = express.Router()

techRoutes.get('/:userId/techs', techController.index)
techRoutes.post('/:userId/techs', techController.create)

module.exports = techRoutes