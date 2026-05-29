import request from "supertest"

import app from "../app"
import database from "../database/db"
import User from "../models/User"

describe("UserController", () => {
    let id: string

    beforeAll(async () => {
        await database.authenticate()
    })

    afterAll(async () => {
        await User.destroy({
            where: {
                id: id
            }
        })
        await database.close()
    })

    it("creates user", async () => {
        const response = await request(app).post("/users").send({
            name: "Test User",
            email: "test@email.com",
            role: "seller",
            password: "test1234"
        })

        console.log(response.body)

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty("id")
        expect(response.body.name).toBe("Test User")
        id = response.body.id
    })
    
    it("should throw an error if there is another user with the same email", async () => {
        const response = await request(app).post("/users").send({
            name: "Duplicate user",
            email: "test@email.com",
            password: "1234567"
        })
        expect(response.status).toBe(400)
        expect(response.body.message).toBe("Another user already has this email registered.")
    })

    it("should throw a validation error if email format is not valid", async () => {
        const response = await request(app).post("/users").send({
            name: "test",
            email: "testmailcom",
            password: "21353523"
        })

        expect(response.status).toBe(400)
        expect(response.body.message).toBe("Validation Error.")
    })
})
