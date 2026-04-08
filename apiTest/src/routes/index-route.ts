import { Router } from "express"
import { userRoute } from "./user-route"
import { questionRoute } from "./question-route"

const routes = Router()

routes.use("/users", userRoute)
routes.use("/questions", questionRoute)

export { routes }