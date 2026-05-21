const User = require('../models/User')
const { z } = require('zod')

class UserController {
    async store(request, response) {
        try {
            const bodySchema = z.object({
                name: z.string({ required_error: 'name is required' }).trim().min(3),
                email: z.string({ required_error: 'email is required' }).trim().email({ message: 'invalid email format'})
            })
            const { name, email } = bodySchema.parse(request.body)
            const user = await User.create({ name: name, email: email })
            return response.status(201).json(user)
        } catch(error) {
            return response.status(400).json({ message: error })
        }
    }
    
    async search(request, response) {
        try {
            const { id } = request.params
            const user = await User.findByPk(id)
            return response.status(200).json(user)
        } catch(error) {
            console.log(error)
            return response.status(400).json({ message: error })
        }
    }

    async index(request, response) {
        try {
            const users = await User.findAll()
            return response.status(200).json(users)
        } catch(error) {
            console.log(error)
            return response.status(400).json({ message: error })
        }
    }
}

module.exports = UserController