class UserController {
    async store(request, response) {
        const { name } = request.body
        return response.status(201).json({ hello: name })
    }
    
    async search(request, response) {
        const { id } = request.params
        return response.status(200).json({ hello: id })
    }
}

module.exports = UserController