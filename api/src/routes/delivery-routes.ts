import ensureAuthenticated from "../middlewares/ensure-authenticated"
import verifyAuthorization from "../middlewares/verify-authorization"

import DeliveryController from "../controllers/DeliveryController"
const deliveryController = new DeliveryController()

import express from "express"
const deliveryRoutes = express.Router()

deliveryRoutes.use(ensureAuthenticated, verifyAuthorization(["seller"]))
deliveryRoutes.post("/", deliveryController.create)
deliveryRoutes.get("/", deliveryController.index)
deliveryRoutes.patch("/:user_id", deliveryController.update)

export default deliveryRoutes