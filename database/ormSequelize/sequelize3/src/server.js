const express = require('express')
const app = express()
const PORT = 3333
const routes = require('./routes/index-routes')
const database = require('./database/db')

app.use(express.json())
app.use(routes)

app.listen(PORT, () => {
    console.log(`The server is running at ${PORT}.`)
})