import { z } from "zod"

const userNameSchema = z.string().min(3).max(20)

console.log(userNameSchema.parse("thiago"))