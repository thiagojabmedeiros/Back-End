import UserController from "../controllers/UserController"
const userController = new UserController

import express from "express"
const userRoutes = express.Router()

userRoutes.post("/", userController.create)

export default userRoutes