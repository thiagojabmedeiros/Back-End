import express from "express"
import { routes } from "./routes/index-routes"

const app = express()
const PORT = 3333

app.use(express.json())
app.use(routes)

app.listen(PORT, () => console.log(`the server is running at ${PORT}!`))