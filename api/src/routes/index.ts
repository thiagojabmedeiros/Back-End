import userRoutes from "./user-routes"
import sessionRoutes from "./session-routes"
import deliveryRoutes from "./delivery-routes"

import express from "express"
const routes = express.Router()

routes.use("/users", userRoutes)
routes.use("/login", sessionRoutes)
routes.use("/deliveries", deliveryRoutes)

export default routes