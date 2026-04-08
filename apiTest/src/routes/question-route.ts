import { Router, Request, Response } from "express"
import { createQuestionMiddleware, editQuestionMiddleware, removeQuestionMiddleware } from "../middlewares/question-middleware"
import { QuestionController } from "../controllers/QuestionController"

const questionRoute = Router()
const questionController = new QuestionController()

questionRoute.get("/", questionController.index)
questionRoute.get("/:id", questionController.search)
questionRoute.post("/", createQuestionMiddleware, questionController.create)
questionRoute.put("/:id", editQuestionMiddleware, questionController.edit)
questionRoute.delete("/:id", removeQuestionMiddleware, questionController.remove)

export { questionRoute }