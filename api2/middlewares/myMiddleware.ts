import { Request, Response, NextFunction } from "express"

export function myMiddleware(request: Request, response: Response, next: NextFunction) {
    request.user_id = "123-4"
    console.log("passed through middleware")
    return next()
}