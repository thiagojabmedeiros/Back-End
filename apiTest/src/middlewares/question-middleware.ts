import { NextFunction, Request, Response } from "express";

function createQuestionMiddleware(request: Request, response: Response, next: NextFunction) {
    console.log("this question was verifyied by middleware!")
    return next()
}

function editQuestionMiddleware(request: Request, response: Response, next: NextFunction) {
    console.log("the question was verifyed and able to be edited!")
    return next()
}

function removeQuestionMiddleware(request: Request, response: Response, next: NextFunction) {
    console.log("the question was verifyed and able to be removed!")
}

export { createQuestionMiddleware, editQuestionMiddleware, removeQuestionMiddleware }