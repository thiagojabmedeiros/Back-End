import { NextFunction, Request, Response } from "express"

function createUserMiddleware(request: Request, response: Response, next: NextFunction) {
    console.log("this user was verified by middleware!")
    return next()
}

export { createUserMiddleware }