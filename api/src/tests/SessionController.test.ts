import request from "supertest"

import app from "../app"
import database from "../database/db"
import User from "../models/User"

describe("SessionController", () => {
    let id: string
    beforeAll(async () => {
        await database.authenticate()
    })

    afterAll(async () => {
        if (id) {
            await User.destroy({
                where: {
                    id: id
                }
            })
        }
        await database.close()
    })

    it("tests authentication of an user", async () => {
        const userResponse = await request(app).post("/users").send({
            name: "test",
            email: "test@email.com",
            password: "1234567"
        })

        console.log(userResponse.body)
        id = userResponse.body.id

        const sessionResponse = await request(app).post("/login").send({
            email: "test@email.com",
            password: "1234567"
        })

        console.log(sessionResponse.body.message)

        expect(sessionResponse.status).toBe(200)
        expect(sessionResponse.body.token).toEqual(expect.any(String))
    })
})