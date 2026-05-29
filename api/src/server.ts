import database from "./database/db"
import app from "./app"

const PORT = 3333

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