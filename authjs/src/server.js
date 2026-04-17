const express = require("express")
const jwt = require("jsonwebtoken")

const PORT = 3333
const app = express()

app.use(express.json())

const fakeUser = {
    "id": 1,
    "username": "thiago",
    "password": 12345,
    "role": "admin"
}

app.post("/login", (req, res) => {
    const { username, password } = req.body

    if (fakeUser.username != username || fakeUser.password != password) {
        res.status(403).json({ mesage: "invalid credentials"})
    }

    const token = jwt.sign({ id: fakeUser.id, role: fakeUser.role }, process.env.SECRET, { expiresIn: "1h" })

    res.status(200).json({ token: token })
})

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        res.status(403).json({ message: "token not provided" })
    }

    const token = authHeader.split(" ")[1]

    try {
        const decode = jwt.verify(token, process.env.SECRET)
        req.user = decode 
        next()
    } catch (err) {
        res.status(403).json({ message: err })
    }

}

app.get("/user", authMiddleware, (req, res) => {

    if (req.user.role != "admin") {
        res.status(403).json({ message: "not allowed" })
    }

    res.status(200).json({ message: "user" })
})

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}.`)
})