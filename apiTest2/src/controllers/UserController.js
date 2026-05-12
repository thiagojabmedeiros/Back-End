const User = require('../models/User')
const zod = require('zod')
const z = zod.z

class UserRoutes {

    async create(request, response) {
        try {
            const bodySchema = z.object({
                name: z.string({ message: "name required." }).trim().min(3, { message: "at least three characthers." }),
                email: z.string({ message: "email required." }).email({ message: "invalid email format." }).trim()
            })

            const { name, email } = bodySchema.parse(request.body)

            const user = await User.create({ name, email })

            return response.status(201).json({ name, email })
        } catch(error) {
            return response.status(400).json({ message: error })
        }
    }

    async search(request, response) {

    }

    async index(request, response) {

    }
}

module.exports = UserRoutes