const { z } = require('zod')
const User = require('../models/User')
const Address = require('../models/Address')

class AddressController {
    async create(request, response) {
        try {
            const paramsSchema = z.object({
                userId: z.coerce
                .number({ required_error: 'id is required' })
                .int({ message: 'id is an integer' })
            })
            const bodySchema = z.object({
                street: z
                .string({ required_error: 'id is required' })
                .min(3, { message: 'street needs to be at least three characters' })
                .trim(),
                number: z
                .number({ required_error: 'street number is required' })
                .int({ message: 'id is an integer' })
            })

            const { userId } = paramsSchema.parse(request.params)
            const user = await User.findByPk(userId)

            if (!user) {
                return response.status(400).json({ message: 'user does not exist' })
            }

            const { street, number } = bodySchema.parse(request.body)

            const adress = await Address.create({ street, number, userId })

            return response.status(201).json(adress)
        } catch(error) {
            if (error instanceof z.ZodError) {
                return response.status(400).json({ message: error.issues })
            }
            return response.status(500).json({ message: error })
        }

        
    }
    async search(request, response) {
        try {
            const idSchema = z.object({
                userId: z
                .coerce
                .number({ required_error: 'id is required' })
                .int({ message: 'id is an integer'})
            })
            const { userId } = idSchema.parse(request.params)
            const user = await User.findByPk(userId)

            if (!user) {
                return response.status(400).json({ message: 'user does not exist '})
            }
            const addresses = await Address.findAll({
                where: { 
                    userId: userId
                }
            })

            if (addresses.length === 0) {
                return response.json({ message: "this user has no addresses associated" })
            }

            return response.status(200).json(addresses)
        } catch(error) {
            if (error instanceof z.ZodError) {
                return response.status(400).json({ message: error.issues })
            }

            return response.status(500).json({ message: error })
        }
    }
    async index(request, response) {

    }
    async change(request, response) {

    }
    async remove(request, response) {

    }
}

module.exports = AddressController