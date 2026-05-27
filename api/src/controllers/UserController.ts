import { Request, Response } from "express"
import User from "../models/User"

class UserController {
    async create(request: Request, response: Response) {
        const { name, role, email, password } = request.body
        const user = await User.create({ name, role, email, password })
        return response.status(201).json(user)
    }
}

export default UserController