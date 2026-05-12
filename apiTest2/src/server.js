const express = require('express')
const database = require('./database/db')

const PORT = 3333

const app = express()

app.use(express.json())

app.listen(PORT, () => {
    console.log(`The server is running at ${PORT}.`)
})