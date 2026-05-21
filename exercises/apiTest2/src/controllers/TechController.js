const User = require('../models/User')
const Tech = require('../models/Tech')
const { z } = require('zod')

class TechController {
    async index(request, response) {
        const { userId } = request.params

        const userTechs = await User.findByPk(userId, {
            attributes: ['name', 'email'],
            include: {
                association: 'techs',
                attributes: ['name'],
                through: {
                    attributes: []
                }
            }
        }) 
        if (!userTechs) {
            return response.status(400).json({ message: 'user doest not exist'})
        }

        return response.status(200).json(userTechs)
    }

    async create(request, response) {
        try {
            const bodySchema = z.object({
                userId: z.coerce.number().int()
            })
            const { userId } = bodySchema.parse(request.params)
            const { name } = request.body

            const user = await User.findByPk(userId)

            if (!user) {
                return response.status(400).json({ message: 'user does not exist' })
            }

            const [ tech ] = await Tech.findOrCreate({
                where: {
                    name: name
                }
            })

            await user.addTech(tech)

            return response.status(201).json(tech)
        } catch (error) {
            if (error instanceof z.ZodError) {
                return response.json(error.issues)
            }
            if (error instanceof Error) {
                return response.json(error.message)
            }
        }
    }

    async search(request, response) {

    }

    async change(request, response) {

    }

    async remove(request, response) {

    }
}

module.exports = TechController