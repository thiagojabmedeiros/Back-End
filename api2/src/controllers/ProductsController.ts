import { Request, Response } from "express"
import { AppError } from "../utils/AppError"
import { z } from "zod"

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
        const bodySchema = z.object({
            name: z
            .string({required_error: "name is required"})
            .trim()
            .min(6, {message: "name must be 6 or more characters"}),
            price: z
            .number({required_error: "price is required"})
            .positive({message: "price must be positive"})
            .gte(10)
        })
        const { name, price } = bodySchema.parse(request.body)
        // if (!name || !price) {
        //     throw new AppError("this creation needs name", 404)
        // }
        // throw new Error("Error to create product")
        // throw new AppError("Error new")

        response.status(201).json({name, price, user_id: request.user_id})
    }
}