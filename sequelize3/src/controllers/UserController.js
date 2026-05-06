class UserController {
    async store(request, response) {
        try {
            const { name } = request.body
            return response.status(201).json({ hello: name })
        } catch(error) {
            console.log(error)
            return response.json({ message: error })
        }
    }
    
    async search(request, response) {
        try {
            const { id } = request.params
            return response.status(200).json({ hello: id })
        } catch(error) {
            console.log(error)
            return response.json({ message: error })
        }
    }
}

module.exports = UserController