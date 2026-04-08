import { NextFunction, Response, Request } from "express";

function createQuestionMiddleware(request: Request, response: Response, next: NextFunction) {
    console.log("the question creation was passed by middleware!")
    return next()
}

function editQuestionMiddleware(request: Request, response: Response, next: NextFunction) {
    console.log("the question edtion was passed by middleware!")
    return next()
}

function removeQuestionMiddleware(request: Request, response: Response, next: NextFunction) {
    console.log("the question remotion was passed by middleware!")
    return next()
}

export { createQuestionMiddleware, editQuestionMiddleware, removeQuestionMiddleware }