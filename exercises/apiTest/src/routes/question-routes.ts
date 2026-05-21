import { QuestionController } from "../controllers/QuestionController"
import { createQuestionMiddleware, editQuestionMiddleware, removeQuestionMiddleware } from "../middlewares/question-middlewares"
import { Router } from "express"

const questionController = new QuestionController()
const questionRoute = Router()

questionRoute.get("/", questionController.index)
questionRoute.get("/:id", questionController.search)
questionRoute.post("/", createQuestionMiddleware, questionController.create)
questionRoute.put("/:id", editQuestionMiddleware, questionController.edit)
questionRoute.delete("/:id", removeQuestionMiddleware, questionController.remove)

export { questionRoute }