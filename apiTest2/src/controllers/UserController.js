const User = require('../models/User')

class UserRoutes {
    async create(request, response) {
        const { name, email } = request.body
        const user = await User.create({ name, email })
        return response.status(201).json({ name, email })
    }
    async search(request, response) {

    }
    async index(request, response) {

    }
}

module.exports = UserRoutes