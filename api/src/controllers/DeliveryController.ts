import { Request, Response } from "express"
import { z } from "zod"
import User from "../models/User"
import Delivery from "../models/Delivery"
import AppError from "../utils/AppError"

class DeliveryController {
    async create(request: Request, response: Response) {
        const bodySchema = z.object({
            user_id: z.uuid(),
            description: z.string().nullish()
        })
        const { user_id, description } = bodySchema.parse(request.body)

        const delivery = await Delivery.create({ user_id, description })

        return response.status(201).json(delivery)
    }

    async index(request: Request, response: Response) {
        const deliveries = await Delivery.findAll({
            attributes: ["id", "description", "created_at"],
            include: {
                association: "user",
                attributes: ["name", "email"]
            }
        })
        if (!deliveries) {
            throw new AppError("There are no deliveries yet.")
        }
        return response.status(200).json(deliveries)
    }

    async update(request: Request, response: Response) {
        const paramsSchema = z.object({
          user_id: z.uuid()  
        })
        const bodySchema = z.object({
            status: z.enum(["in progress", "coming to you", "delivered"]),
            order_id: z.uuid()
        })

        const { user_id } = paramsSchema.parse(request.params)
        const { status, order_id } = bodySchema.parse(request.body)

        const delivery = await Delivery.update({ status }, {
            where: {
                user_id: user_id,
                id: order_id
            }
        })

        return response.json(delivery)
    }
}

export default DeliveryController