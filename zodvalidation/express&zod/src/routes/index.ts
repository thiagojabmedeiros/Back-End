import { Router } from "express"
import { productsRoutes } from "./productRoutes"

const routes = Router()

routes.use("/products", productsRoutes)

export { routes }