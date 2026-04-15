import { Router } from "express"
import { ProductsController } from "@/controllers/products-controller"
import { ensureAuth } from "../middlewares/ensure-authentication"
import { verifyUserAuthorization } from "../middlewares/verify-user-authorization"

const productsRoutes = Router()
const productsController = new ProductsController()

productsRoutes.get("/", productsController.index)
productsRoutes.post("/", ensureAuth, verifyUserAuthorization(["sale", "manager"]), productsController.create)

export { productsRoutes }
