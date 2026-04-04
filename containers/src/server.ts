import express, {Request, Response} from "express"

const app = express()
const PORT = 3333

app.use(express.json())

app.get("/person", async (request: Request, response: Response) => {
    const { name, age } = request.body

    return response.status(200).json({ name, age, sex: "masculine" })
})

app.listen(PORT, () => {
    console.log(`you are on port ${PORT}`)
})