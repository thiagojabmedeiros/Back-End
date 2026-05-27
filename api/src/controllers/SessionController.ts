import { Request, Response } from "express"
import User from "../models/User"
import { compare } from "bcrypt"
import { z } from "zod"
import AppError from "../utils/AppError"

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

        return response.json({ message: "ok!"})
    }
}

export default SessionController