import { Request, Response } from "express"
import { hash } from "bcrypt"
import { z } from "zod"
import User from "../models/User"
import AppError from "../utils/AppError"

class UserController {
    async create(request: Request, response: Response) {
        const bodySchema = z.object({
            name: z.string().min(3).trim(),
            email: z.email(),
            role: z.string().nullish(),
            password: z.string().min(6)
        })

        const { name, role, email, password } = bodySchema.parse(request.body)

        if (await User.findOne({
            where: {
                email: email
            }
        })) {
            throw new AppError("Another user already has this email registered.")
        }
        const hashedPassword = await hash(password, 8)

        const user = await User.create({ name, role, email, password: hashedPassword })

        const { password: _, ...userWithoutPassword } = user.toJSON()

        return response.status(201).json(userWithoutPassword)
    }
}

export default UserController