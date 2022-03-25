const matrixElementsSum = require('./matrixElementsSum')

describe('how much cost all the rooms are no haunted?', ()=>{

    test('should return 9 if receive [[0,1,1,2], [0,5,0,0], [2,0,3,3]]', ()=>{
        const input = [[0,1,1,2], [0,5,0,0], [2,0,3,3]]
        expect(matrixElementsSum(input)).toBe(9)
    }),

    test('should return 9 if receive [[1,1,1,0], [0,5,0,1], [2,1,3,10]]',()=>{
        const input = [[1,1,1,0], [0,5,0,1], [2,1,3,10]]
        expect(matrixElementsSum(input)).toBe(9)
    }),

    test('should return 18 if receive [[1,1,1], [2,2,2], [3,3,3]]', ()=>{
        const input = [[1,1,1], [2,2,2], [3,3,3]]
        expect(matrixElementsSum(input)).toBe(18)
    }),

    test('should return 0 if receive [[0]]', ()=>{
        const input = [[0]]
        expect(matrixElementsSum(input)).toBe(0)
    }),

    test('should return 5 if receive [[1,0,3], [0,2,1], [1,2,0]]', ()=>{
        const input = [[1,0,3], [0,2,1], [1,2,0]]
        expect(matrixElementsSum(input)).toBe(5)
    }),

    test('should return 6 if receive [[1], [5], [0], [2]]', ()=>{
        const input = [[1], [5], [0], [2]]
        expect(matrixElementsSum(input)).toBe(6)
    }),

    test('should return 15 if receive [[1,2,3,4,5]]', ()=>{
        const input = [[1,2,3,4,5]]
        expect(matrixElementsSum(input)).toBe(15)
    }),

    test('should return 17 if receive [[2], [5], [10]]', ()=>{
        const input = [[2], [5], [10]]
        expect(matrixElementsSum(input)).toBe(17)
    }),

    test('should return 15 if receive [[4,0,1], [10,7,0], [0,0,0], [9,1,2]]', ()=>{
        const input = [[4,0,1], [10,7,0], [0,0,0], [9,1,2]]
        expect(matrixElementsSum(input)).toBe(15)
    }),

    test('should return 1 if receive [[1]]', ()=>{
        expect(matrixElementsSum([[1]])).toBe(1)
    })
})