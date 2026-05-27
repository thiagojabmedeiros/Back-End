import express from "express"

import database from "./database/db"
import errorHandling from "./middlewares/error-handling"
import routes from "./routes"

const PORT = 3333
const app = express()

app.use(express.json())

app.use(routes)

app.use(errorHandling)

app.listen(PORT, async () => {
    try {
        // Authenticate the database connection
        await database.authenticate()
        console.log("Database connection has been established successfully.")
        
        console.log(`Server is running on ${PORT}.`)
    } catch (error) {
        console.error("Unable to connect to the database:", error)
    }
})