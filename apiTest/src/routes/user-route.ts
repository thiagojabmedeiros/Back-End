import { Router, Request, Response } from "express"
import { createUserMiddleware } from "../middlewares/user-middleware"
import { UserController } from "../controllers/UserController"

const userRoute = Router()
const userController = new UserController()

userRoute.get("/", userController.index)
userRoute.get("/:id", userController.search)
userRoute.post("/", createUserMiddleware, userController.create)


export { userRoute }