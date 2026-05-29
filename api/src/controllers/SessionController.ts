import { Request, Response } from "express"
import { sign } from "jsonwebtoken"
import { compare } from "bcrypt"
import { z } from "zod"

import User from "../models/User"
import AppError from "../utils/AppError"
import authConfig from "../config/auth-config"

class SessionController {
    async login(request: Request, response: Response) {
        const bodySchema = z.object({
            email: z.email(),
            password: z.string().min(6)
        })

        const { email, password } = bodySchema.parse(request.body)

        const user = await User.findOne({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new AppError("Invalid email or password.")
        }

        const passwordMatched = await compare(password, user.toJSON().password)
        if (!passwordMatched) {
            throw new AppError("Invalid email or password.")
        }
        const userObj = user.toJSON()
        const { secret, expiresIn } = authConfig.jwt

        const token = sign({ role: userObj.role }, secret, {
            subject: userObj.id,
            expiresIn: expiresIn
        })

        const { password: _, ...userWithoutPassword } = userObj

        return response.json({ token: token, user: userWithoutPassword })
    }
}

export default SessionController