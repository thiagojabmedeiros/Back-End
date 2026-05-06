const User = require('../models/User')

class UserController {
    async store(request, response) {
        try {
            const { name, email } = request.body
            const user = await User.create({ name: name, email: email })
            return response.status(201).json(user)
        } catch(error) {
            console.log(error)
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