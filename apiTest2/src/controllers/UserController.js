const User = require('../models/User')
const { z } = require('zod')

class UserRoutes {

    async create(request, response) {
        try {
            const bodySchema = z.object({
                name: z
                .string({ required_error: "name is required" })
                .min(3, { message: "at least three chars" })
                .trim(),
                email: z
                .string({ required_error: "email is required" })
                .email({ message: "invalid email format" })
                .trim()
            })
            const { name, email } = bodySchema.parse(request.body)
            const user = await User.create({ name, email })
            return response.status(201).json(user)
        } catch(error) {
            if (error instanceof z.ZodError) {
                return response.status(400).json({ message: error.issues })
            }
            return response.status(500).json({ message: error })
        }
    }

    async search(request, response) {
        
    }

    async index(request, response) {

    }
}

module.exports = UserRoutes