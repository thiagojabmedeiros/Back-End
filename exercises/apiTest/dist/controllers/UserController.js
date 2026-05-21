"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const prisma_1 = require("../prisma");
class UserController {
    /**
     * index - get
     * search - get
     * create - post
     */
    async index(request, response) {
        const users = await prisma_1.prisma.user.findMany();
        response.status(200).json(users);
    }
    async search(request, response) {
        const { id } = request.params;
        const user = await prisma_1.prisma.user.findUnique({ where: { id } });
        response.status(200).json(user);
    }
    async create(request, response) {
        const { name, email } = request.body;
        await prisma_1.prisma.user.create({ data: { name, email } });
        response.status(201).json({ name, email });
    }
}
exports.UserController = UserController;
