const User = require('../models/User')

class UserController {
    async create(request, response) {
        const { name, email } = request.body
        const user = await User.create({ name: name, email: email })
        return response.status(201).json(user)
    }

    async index(req, res) {
        const users = await User.findAll()
        return res.json(users)
    }

    async search(req, res) {
        const { id } = req.params
        const user = await User.findByPk(id)
        return res.json(user)
    }
}

module.exports = UserController