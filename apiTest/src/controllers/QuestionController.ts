import { Response, Request } from "express"
import { prisma } from "../prisma"

class QuestionController {
    /**
     * index - get
     * search - get
     * create - post
     * edit - put
     * remove - delete
     */

    async index (request: Request, response: Response) {
        const questions = await prisma.question.findMany()
        response.status(200).json(questions)
    }

    async search (request: Request, response: Response) {
        const { id } = request.params
        const questions = await prisma.question.findUnique({ where: { id }})
        response.status(200).json(questions)
    }

    async create (request: Request, response: Response) {
        const { title, content, userId } = request.body
        await prisma.question.create({ data: { title, content, userId }})
        response.status(201).json({})
    }

    async edit (request: Request, response: Response) {
        const { id } = request.params
        const { content } = request.body
        await prisma.question.update({ data: { content }, where: { id }})
        response.status(200).json({})
    }

    async remove (request: Request, response: Response) {
        const { id } = request.params
        await prisma.question.delete({ where: { id }})
        response.status(200).json({})
    }
}

export { QuestionController }