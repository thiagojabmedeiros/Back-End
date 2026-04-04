import express, { Request, Response } from "express"
import { knex } from "./database/knex"
const app = express()
app.use(express.json())

app.post("/courses", async (request: Request, response: Response) => {
  const { name } = request.body

  await knex("courses").insert({ name })

  response.status(201).json({ name })
})
app.get("/courses", async (request: Request, response: Response) => {
  const courses = await knex("courses").select()

  response.json(courses)
})
app.put("/courses/:id", async (request: Request, response: Response) => {
  const { name } = request.body
  const { id } = request.params

  await knex("courses").update({ name }).where({ id })

  return response.json()
})
app.delete("/courses/:id", async (request: Request, response: Response) => {
  const { id } = request.params

  await knex("courses").delete().where({ id })

  return response.json()
})


app.post("/modules", async (request: Request, response: Response) => {
  const { name, course_id } = request.body

  await knex("course_modules").insert({ name, course_id })

  return response.status(201).json()
})
app.get("/modules", async (request: Request, response: Response) => {
  const modules = await knex("course_modules").select()

  return response.json(modules)
})
app.put("/modules/:id", async (request: Request, response: Response) => {
  const { course_id } = request.body
  const { id } = request.params

  await knex("course_modules").update({ course_id }).where({ id })

  return response.json()
})
app.delete("/modules/:id", async (request: Request, response: Response) => {
  const { id } = request.params

  await knex("course_modules").delete().where({ id })

  return response.json()
})

app.get("/courses/:id/modules", async (request: Request, response: Response) => {
  const { id } = request.params
  const courses = await knex("courses")
  .select()
  .join("course_modules", "courses.id", "course_modules.course_id")
  .where("courses.id", id)

  return response.json(courses)
})

app.listen(3333, () => console.log(`Server is running on port 3333`))
