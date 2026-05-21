const User = require('../models/User')
const Tech = require('../models/Tech')
const { z } = require('zod')

class TechController {
    async index(request, response) {
        try {
            const { userId } = request.params
            
            const user = await User.findByPk(userId)

            if (!user) {
                return response.json({ message: 'user does not exist' })
            }
            const techs = await Tech.findAll({
                include: {
                    association: 'users'
                }
            })
            if (techs.length === 0) {
                return response.json({ message: 'no techs assigned yet' })
            }
            return response.json(techs)
        } catch(error) {
            if (error instanceof Error) {
                return response.status(500).json({ message: error.message })
            }
        }
    }

    async create(request, response) {
        const bodySchema = z.object({
            name: z.string().min(2).trim()
        })
        const { name } = bodySchema.parse(request.body)
        const { userId } = request.params
        const user = await User.findByPk(userId)
        if (!user) {
            return response.status(400).json({ })
        }
        const [ tech ] = await Tech.findOrCreate({
            where: {
                name: name
            }
        })
        await user.addTech(tech)
        return response.json(tech)
    }
}

module.exports = TechController