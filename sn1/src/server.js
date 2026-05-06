const express = require('express')
const app = express()
const PORT = 3333
const database = require('./database/db')
const routes = require('./routes/index-routes')

app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
    console.log(`The server is running on PORT: ${PORT}.`)
})