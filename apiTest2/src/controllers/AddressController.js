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
                .int({ message: "street number is an integer" })
            })

            const { userId } = paramsSchema.parse(request.params)
            const user = await User.findByPk(userId)

            if (!user) {
                return response.status(400).json({ message: 'user does not exist' })
            }

            const { street, number } = bodySchema.parse(request.body)
            if (await Address.findOne({
                where: {
                    number: number
                }
            })) {
                return response.status(400).json({ message: "this street already have an address with the same number" })
            }

            const adress = await Address.create({ street, number, userId })

            return response.status(201).json(adress)
        } catch(error) {
            if (error instanceof z.ZodError) {
                return response.status(400).json({ message: error.issues })
            }
            if (error instanceof Error) {
                return response.status(500).json({ message: error.message })
            }
        }

        
    }

    async search(request, response) {
        try {
            const idSchema = z.object({
                userId: z
                .coerce
                .number({ required_error: 'user id is required' })
                .int({ message: 'user id is an integer'}),
                id: z.coerce
                .number({ required_error: 'address id is required'})
                .int({ message: 'address id is an integer' })
            })

            const { userId, id } = idSchema.parse(request.params)
            const user = await User.findByPk(userId)

            if (!user) {
                return response.status(400).json({ message: 'user does not exist '})
            }

            const addresses = await Address.findOne({
                where: { 
                    userId: userId,
                    id: id
                }
            })

            if (!addresses) {
                return response.json({ message: "this address is not associated" })
            }

            return response.status(200).json(addresses)

        } catch(error) {
            if (error instanceof z.ZodError) {
                return response.status(400).json({ message: error.issues })
            }
            if (error instanceof Error) {
                return response.status(500).json({ message: error.message })
            }
        }
    }

    async index(request, response) {
        try {
            const idSchema = z.object({
                userId: z
                .coerce
                .number({ required_error: "id is required" })
                .int({ message: "id is an integer" })
            })

            const { userId } = idSchema.parse(request.params)

            if (!userId) {
                return response.status(400).json({ message: "this user does not exist" })
            }

            const addresses = await Address.findAll({
                where: {
                    userId: userId
                }
            })

            if (addresses.length === 0) {
                return response.json({ message: "there are no addresses stored yet" })
            }

            return response.json(addresses)
        } catch(error) {
            if (error instanceof z.ZodError) {
                return response.status(400).json({ message: error.issues })
            }
            if (error instanceof Error) {
                return response.status(500).json({ message: error.message })
            }
        }
    }

    async change(request, response) {
        try {
            const paramsSchema = z.object({
                userId: z
                .coerce
                .number({ required_error: "user id is required" })
                .int({ message: "user id is an integer" }),
                id: z
                .coerce
                .number({ required_error: "id is required" })
                .int({ message: "id is an integer" })
            })
            const bodySchema = z.object({
                street: z
                .string({ required_error: "street is a string" })
                .trim()
                .nullish(),
                number: z
                .coerce
                .number({ required_error: "street number is required" })
                .int({ message: "street number is an integer" })
                .nullish()
            })

            const { userId, id } = paramsSchema.parse(request.params)
            const { street, number } = bodySchema.parse(request.body)

            const user = await User.findByPk(userId)
            if (!user) {
                return response.status(400).json({ message: "user does not exist" })
            }
            const address = await Address.findOne({
                where: {
                    id: id,
                    userId: userId
                }
            })
            if (!address) {
                return response.status(400).json({ message: "this address does not exist or it is not associated to this user" })
            }
            await address.update({ street, number })
            return response.status(200).json(address)
        } catch(error) {
            if (error instanceof z.ZodError) {
                return response.status(400).json({ message: error.issues })
            }
            if (error instanceof Error) {
                return response.status(500).json({ message: error.message })
            }
        }
    }

    async remove(request, response) {
        try {
            const paramsSchema = z.object({
                userId: z
                .coerce
                .number()
                .int(),
                id: z
                .coerce
                .number()
                .int()
            })

            const { userId, id } = paramsSchema.parse(request.params)

            const user = await User.findByPk(userId)
            if (!user) {
                return response.status(400).json({ message: "user does not exist" })
            }
            const address = await Address.findOne({
                where: {
                    id: id,
                    userId: userId
                }
            })
            if (!address) {
                return response.status(400).json({ message: "this address does not exist or it is not associated to this user" })
            }

            await address.destroy()

            return response.json({ message: "address was removed successfully" })
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

module.exports = AddressController