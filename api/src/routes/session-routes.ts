import SessionController from "../controllers/SessionController"
const sessionController = new SessionController

import express from "express"
const sessionRoutes = express.Router()

sessionRoutes.post("/", sessionController.login)

export default sessionRoutes