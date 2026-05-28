import { z } from "zod"

import dotenv from "dotenv"
dotenv.config()

const envSchema = z.object({
    JWT_SECRET: z.string()
})

const env = envSchema.parse(process.env)

export default env