import { Request, Response } from "express"
import { AppError } from "../utils/AppError"
export class ProductsController {
    /**
     * index - GET
     * show - GET
     * create - POST
     * update - PUT
     * remove - DELETE
     */

    index(request: Request, response: Response) {
        const { page, limit } = request.query
        response.send(`page ${page} of ${limit}.`)
    }
    create(request: Request, response: Response) {
        const {name, price} = request.body
        if (!name || !price) {
            throw new AppError("this creation needs name", 404)
        }
        // throw new Error("Error to create product")
        // throw new AppError("Error new")

        response.status(201).json({name, price, user_id: request.user_id})
    }
}