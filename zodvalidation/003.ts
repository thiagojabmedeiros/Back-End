import { z } from "zod"

const cartSchema = z.object({
    clientId: z.string().uuid(),
    products: z.array(z.object({
        name: z.string().min(3),
        price: z.number().min(1),
        amount: z.number().min(1),
        categories: z.array(z.string()).min(1)
    })).min(2)
})

const cart = {
    clientId: crypto.randomUUID(),
    products: [{
        name: "banana",
        price: 1,
        amount: 6,
        categories: ["health", "food", "fruit"]
    }]
}

const { success, error } = cartSchema.safeParse(cart)

console.log(error)