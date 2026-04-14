import { z } from "zod"

const userSchema = z.object({
    email: z.string().email(),
    age: z.number().min(18).max(100),
    nickName: z.string().min(2).optional()
})

const user = {
    email: "thiago.email.com",
    age: 22,
    nickName: "thiagostoso"
}

const { success, error } = userSchema.safeParse(user)

console.log(success, error)