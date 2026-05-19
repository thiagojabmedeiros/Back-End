const User = require('../models/User')
const Project = require('../models/Project')
const { z } = require('zod')

class ProjectController {
    async index(request, response) {
        try {
            const { userId } = request.params
            const projects = await Project.findAll({
                where: {
                    userId: userId
                }
            })
            if (projects.length === 0) {
                return response.status(400).json({ message: 'nothing here' })
            } 
            return response.status(200).json(projects)
        } catch(error) {
            if (error instanceof z.ZodError) {
                return response.status(400).json({ message: error.issues })
            }
            if (error instanceof Error) {
                return response.status(500).json({ message: error.message })
            }
        }
    }

    async create(request, response) {
        try {
            const bodySchema = z.object({
                title: z.string().min(1).trim(),
                description: z.string().trim().nullish()
            })
            const { title, description } = bodySchema.parse(request.body)
            const { userId } = request.params
            const user = await User.findByPk(userId)
            if (!user) {
                return response.status(400).json({ message: 'user does not exist' })
            }
            const project = await Project.create({ title, description, userId })

            return response.status(201).json(project)
        } catch(error) {
            if (error instanceof z.ZodError) {
                return response.status(400).json({ message: error.issues })
            }
            if (error instanceof Error) {
                return response.status(500).json({ message: error.message })
            }
        }
    }
}

module.exports = ProjectController