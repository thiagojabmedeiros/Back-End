import { Response, Request } from "express"
import { prisma } from "../prisma"

class UserController {
    /**
     * index - get
     * search - get
     * create - post
     */

    async index (request: Request, response: Response) {
        const users = await prisma.user.findMany()
        response.status(200).json(users)
    }

    async search (request: Request, response: Response) {
        const { id } = request.params
        const user = await prisma.user.findUnique({ where: {id}})
        response.status(200).json(user)
    }

    async create (request: Request, response: Response) {
        const { name, email } = request.body
        await prisma.user.create({ data: { name, email }})
        response.status(201).json({ name, email })
    }
}

export { UserController }