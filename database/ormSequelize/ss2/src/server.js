const express = require('express')
const app = express()
require('./database/db')

const routes = require('./routes/userRoute')
const PORT = 3333

app.use(express.json())

app.use(routes)

app.listen(PORT, () => console.log(`Server running at ${PORT}.`))