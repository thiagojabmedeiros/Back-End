import { createUserMiddleware } from "../middlewares/user-middlewares"
import { UserController } from "../controllers/UserController"
import { Router } from "express"

const userController = new UserController()
const userRoute = Router()

userRoute.get("/", userController.index)
userRoute.get("/:id", userController.search)
userRoute.post("/", createUserMiddleware, userController.create)

export { userRoute }