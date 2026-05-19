const ProjectController = require('../controllers/ProjectController')
const projectController = new ProjectController()

const express = require('express')
const projectRoutes = express.Router()

projectRoutes.get('/:userId/projects', projectController.index)
projectRoutes.post('/:userId/projects', projectController.create)

module.exports = projectRoutes