import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

import AppError from "../utils/AppError"
import authConfig from "../config/auth-config"

interface TokenPayload {
    role: string,
    sub: string
}

function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    try {
        const authHeader = request.headers.authorization
        if (!authHeader) {
            throw new AppError("Token not found.", 401)
        }
        const [, token] = authHeader.split(" ")
        const { role, sub: user_id } = verify(token as string, authConfig.jwt.secret) as TokenPayload

        request.user = {
            role: role,
            id: user_id
        }

        return next()
    } catch (error) {
        throw new AppError("Invalid token.", 401)
    }
}

export default ensureAuthenticated