"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionController = void 0;
const prisma_1 = require("../prisma");
class QuestionController {
    /**
     * index - get
     * search - get
     * create - post
     * edit - put
     * remove - delete
     */
    async index(request, response) {
        const questions = await prisma_1.prisma.question.findMany();
        response.status(200).json(questions);
    }
    async search(request, response) {
        const { id } = request.params;
        const questions = await prisma_1.prisma.question.findUnique({ where: { id } });
        response.status(200).json(questions);
    }
    async create(request, response) {
        const { title, content, userId } = request.body;
        await prisma_1.prisma.question.create({ data: { title, content, userId } });
        response.status(201).json({});
    }
    async edit(request, response) {
        const { id } = request.params;
        const { content } = request.body;
        await prisma_1.prisma.question.update({ data: { content }, where: { id } });
        response.status(200).json({});
    }
    async remove(request, response) {
        const { id } = request.params;
        await prisma_1.prisma.question.delete({ where: { id } });
        response.status(200).json({});
    }
}
exports.QuestionController = QuestionController;
