import { sum } from "./sum"

describe("sum", () => {
    let sumResult: number
    beforeAll(() => {
        sumResult = 10
        console.log(sumResult)
    })
    afterAll(() => {
        sumResult = 0
        console.log(sumResult)
    })
    it("sum of 3 + 7 must be 10", () => {
        const result = sum(3,7)
        expect(result).toBe(sumResult)
    })
    test("sum of 5 + 8 must be 13", () => {
        const result = sum(5,8)
        expect(result).toBe(13)
    })
})