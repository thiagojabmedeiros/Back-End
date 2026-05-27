import userRoutes from "./user-routes"
import sessionRoutes from "./session-routes"
import express from "express"
const routes = express.Router()

routes.use("/users", userRoutes)
routes.use("/login", sessionRoutes)

export default routes