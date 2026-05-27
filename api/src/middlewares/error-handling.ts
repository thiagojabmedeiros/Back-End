import { z } from "zod"
import AppError from "../utils/AppError"
import { Request, Response, NextFunction } from "express"

function errorHandling(error: any, 
    request: Request, 
    response: Response, 
    next: NextFunction) {

    if (error instanceof z.ZodError) {
        return response.status(400).json({
            message: "Validation Error.",
            issues: z.prettifyError(error)
        })
    }
    
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            message: error.message
        })
    }

    if (error instanceof Error) {
        return response.status(500).json({
            message: error.message
        })
    }

    return response.status(500).json({
        message: "Internal Server Error."
    })
}

export default errorHandling