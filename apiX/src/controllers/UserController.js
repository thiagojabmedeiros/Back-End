const { z } = require('zod')
const User = require('../models/User')

class UserController {
    async index(request, response) {
        try {
            const users = await User.findAll({
                attributes: ['name', 'email']
            })
            if (users.length === 0) {
                return response.status(400).json({ message: 'no users created yet' })
            }

            return response.status(200).json(users)
        } catch(error) {
            if (error instanceof Error) {
                return response.status(500).json({ message: error.message })
            }
        }
    }

    async create(request, response) {
        try {
            const bodySchema = z.object({
                name: z.string().min(3).trim(),
                email: z.string().email().trim()
            })
            const { name, email } = bodySchema.parse(request.body)

            const user = await User.create({ name, email })

            return response.status(201).json(user)
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

module.exports = UserController