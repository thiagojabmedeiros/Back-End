import express from "express"
import { myMiddleware } from "../middlewares/myMiddleware"

const PORT = 3333
const app = express()
app.use(express.json())
app.use(myMiddleware)

app.get("/products/:id/:user", (request, response) => {
    const { id, user } = request.params
    const { limit, page } = request.query
    response.send(`id: ${id}, user: ${user}`)
})
app.post("/products", myMiddleware, (request, response) => {
    const { name, price } = request.body
    // response.send(`name: ${name}, price: ${price}`)
    response.status(201).json({name, price, user_id: request.user_id})
})
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})