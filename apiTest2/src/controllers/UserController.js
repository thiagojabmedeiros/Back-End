const User = require('../models/User')
const { z } = require('zod')

class UserRoutes {

    async static create(request, response) {
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
            
            if (await User.findOne({
                where: {
                    email: email
                }
            }) != null) {
                return response.status(400).json({ message: "a user already have the same email" })
            }

            const user = await User.create({ name, email })
            return response.status(201).json(user)
        } catch(error) {
            if (error instanceof z.ZodError) {
                return response.status(400).json({ message: error.issues })
            }
            return response.status(500).json({ message: error })
        }
    }

    async static search(request, response) {
        try {
            const idSchema = z.object({
                id: z
                .coerce
                .number({ required_error: "id is required" })
                .int({ message: "id needs to be an integer" })
            })

            const { id } = idSchema.parse(request.params)

            const user = await User.findByPk(id)

            if (!user) {
                return response.status(400).json({ message: "user does not exist in this table" })
            }
            
            return response.status(200).json(user)
        } catch(error) {
            if (error instanceof z.ZodError) {
                return response.status(400).json({ message: error.issues })
            }
            return response.status(500).json({ message: error })
        }
    }

    async static index(request, response) {
        try {
            const users = await User.findAll({
                order: [["id", "ASC"]]
            })
            if (users.length === 0) {
                return response.json({ message: "there are no users stored yet" })
            }
            return response.status(200).json(users)
        } catch (error) {
            return response.status(500).json({ message: error.message })
        }
    }

    async static remove(request, response) {
        try {
            const idSchema = z.object({
                id: z
                .coerce
                .number({ required_error: "id is required" })
                .int({ message: "id needs to be an integer" })
            })
            const { id } = idSchema.parse(request.params)
            const user = await User.findByPk(id)
            if (!user) {
                return response.status(400).json({ message: "user does not exist" })
            }
            await user.destroy()
            return response.status(200).json({ message: "user was removed" })
        } catch(error) {
            if (error instanceof z.ZodError) {
                return response.status(400).json({ message: error.issues })
            }
            return response.status(500).json({ message: error })
        }
    }

    async static change(request, response) {
        try {
            const idSchema = z.object({
                id: z
                .coerce
                .number({ required_error: "id is required" })
                .int({ message: "id needs to be an integer" })
            })
            const bodySchema = z.object({
                name: z.string({ required_error: "name is a string" }).min(3, { message: "at least 3 characthers"}).trim().nullable().optional(),
                email: z.string({ required_error: "email is a string" }).email({ message: "invalid email format" }).trim().nullish(),
            })

            const { id } = idSchema.parse(request.params)
            const user = await User.findByPk(id)

            if (!user) {
                return response.status(400).json({ message: "user does not exist" })
            }
            const { name, email } = bodySchema.parse(request.body)

            await user.update({ name, email })
            
            return response.status(200).json(user)

        } catch(error) {
            if (error instanceof z.ZodError) {
                return response.status(400).json({ message: error.issues })
            }
            return response.status(500).json({ message: error })
        }
    }
    
}

module.exports = UserRoutes