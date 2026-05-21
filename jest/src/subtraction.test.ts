import { subtraction } from "./subtraction";

describe("subtraction", () => {
    test("subtraction of 2 - 6 must be -4", () => {
        const result = subtraction(2,6)
        expect(result).toBe(-4)
    })
    test("subtraction of 4 - 2 must be 2", () => {
        const result = subtraction(4,2)
        expect(result).toBe(2)
    })
})