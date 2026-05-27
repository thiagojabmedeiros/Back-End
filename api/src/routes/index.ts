import userRoutes from "./user-routes"
import express from "express"
const routes = express.Router()

routes.use("/users", userRoutes)

export default routes