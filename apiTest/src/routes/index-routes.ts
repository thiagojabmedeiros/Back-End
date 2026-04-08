import { userRoute } from "./user-routes"
import { questionRoute } from "./question-routes"
import { Router } from "express"

const routes = Router()

routes.use("/users", userRoute)
routes.use("/questions", questionRoute)

export { routes }