import { NextFunction, Request, Response } from "express";

function createUserMiddleware(request: Request, response: Response, next: NextFunction) {
    console.log("the user creation was passed by middleware!")
    return next()
}

export { createUserMiddleware }