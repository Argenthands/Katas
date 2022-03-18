const { Recursive, Iterative } = require('./Fibonacci')

describe('return the element that corresponds to the position in the Fibonacci sequence', ()=>{

    test('should return 0 if receive 0 in both functions, the Recursive and the Iterative', ()=>{
        expect(0).toBe(Recursive(0))
        expect(0).toBe(Iterative(0))
    }),

    test('should return 1 if receive 1 and 2 in both functions, the Recursive and the Iterative',()=>{
        expect(1).toBe(Recursive(1))
        expect(1).toBe(Iterative(1))
        expect(1).toBe(Recursive(2))
        expect(1).toBe(Iterative(2))
    }),

    test('should return 2 if receive 3 in both functions',()=>{
        expect(2).toBe(Recursive(3))
        expect(2).toBe(Iterative(3))
    }),

    test('should return 3 if receive 4 in both functions',()=>{
        expect(3).toBe(Recursive(4))
        expect(3).toBe(Iterative(4))
    }),

    test('should return 2 if receive 3 in both functions',()=>{
        expect(5).toBe(Recursive(5))
        expect(5).toBe(Iterative(5))
    }),

    test('should return 2 if receive 3 in both functions',()=>{
        expect(8).toBe(Recursive(6))
        expect(8).toBe(Iterative(6))
    }),

    test('should return 2 if receive 3 in both functions',()=>{
        expect(13).toBe(Recursive(7))
        expect(13).toBe(Iterative(7))
    }),

    test('should return 2 if receive 3 in both functions',()=>{
        expect(21).toBe(Recursive(8))
        expect(21).toBe(Iterative(8))
    }),

    test('should return 2 if receive 3 in both functions',()=>{
        expect(34).toBe(Recursive(9))
        expect(34).toBe(Iterative(9))
    }),

    test('should return 2 if receive 3 in both functions',()=>{
        expect(55).toBe(Recursive(10))
        expect(55).toBe(Iterative(10))
    })
})