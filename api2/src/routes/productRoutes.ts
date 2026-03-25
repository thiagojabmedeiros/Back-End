import { Router } from "express"
import { myMiddleware } from "../middlewares/myMiddleware"
import { ProductsController } from "../controllers/ProductsController"
const productsRoutes = Router()
const productController = new ProductsController()

productsRoutes.get("/", productController.index)
productsRoutes.post("/", myMiddleware, productController.create)

export { productsRoutes }