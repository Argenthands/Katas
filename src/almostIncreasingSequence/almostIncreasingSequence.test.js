const almostIncreasingSequence = require('./almostIncreasingSequence')
describe('Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.', ()=>{

    test('should return false if receive the array [1, 3, 2, 1]', ()=>{
        const input = [1, 3, 2, 1] // false
        expect(almostIncreasingSequence(input)).toBe(false)
    }),

    test('should return true if receive the array [1, 3, 2]', ()=>{
        const input = [1, 3, 2] // true
        expect(almostIncreasingSequence(input)).toBe(true)
    }),

    test('should return false if receive the array [1, 2, 1, 2]', ()=>{
        const input = [1, 2, 1, 2] // false
        expect(almostIncreasingSequence(input)).toBe(false)
    }),

    test('should return false if receive the array [3, 6, 5, 8, 10, 20, 15]', ()=>{
        const input = [3, 6, 5, 8, 10, 20, 15] // false
        expect(almostIncreasingSequence(input)).toBe(false)
    }),

    test('should return false if receive the array [1, 1, 2, 3, 4, 4]', ()=>{
        const input = [1, 1, 2, 3, 4, 4] // false
        expect(almostIncreasingSequence(input)).toBe(false)
    }),
    
    test('should return false if receive the array [1, 4, 10, 4, 2]', ()=>{
        const input = [1, 4, 10, 4, 2] // false
        expect(almostIncreasingSequence(input)).toBe(false)
    }),

    test('should return true if receive the array [10, 1, 2, 3, 4, 5]', ()=>{
        const input = [10, 1, 2, 3, 4, 5] // true
        expect(almostIncreasingSequence(input)).toBe(true)
    }),
    
    test('should return false if receive the array [1, 1, 1, 2, 3]', ()=>{
        const input = [1, 1, 1, 2, 3] // false
        expect(almostIncreasingSequence(input)).toBe(false)
    }),
    
    test('should return true if receive the array [0, -2, 5, 6]', ()=>{
        const input = [0, -2, 5, 6] // true
        expect(almostIncreasingSequence(input)).toBe(true)
    }),
    
    test('should return false if receive [1, 2, 3, 4, 5, 3, 5, 6]', ()=>{
        const input = [1, 2, 3, 4, 5, 3, 5, 6] // false
        expect(almostIncreasingSequence(input)).toBe(false)
    }),
    
    test('should return false if receive [40, 50, 60, 10, 20, 30]', ()=>{
        const input = [40, 50, 60, 10, 20, 30] // false
        expect(almostIncreasingSequence(input)).toBe(false)
    }),
    
    test('should return true if receive [1, 1]', ()=>{
        const input = [1, 1] // true
        expect(almostIncreasingSequence(input)).toBe(true)
    }),
    
    test('should return true if receive [1, 2, 5, 3, 5]', ()=>{
        const input = [1, 2, 5, 3, 5] // true
        expect(almostIncreasingSequence(input)).toBe(true)
    }),

    test('should return false if receive [1, 2, 5, 5, 5]', ()=>{
        const input = [1, 2, 5, 5, 5] // false
        expect(almostIncreasingSequence(input)).toBe(false)
    })

    test('should return false if receive [10, 1, 2, 3, 4, 5, 6, 1]', ()=>{
        const input = [10, 1, 2, 3, 4, 5, 6, 1] // false
        expect(almostIncreasingSequence(input)).toBe(false)
    }),

    test('should return true if receive [1, 2, 3, 4, 3, 6]', ()=>{
        const input = [1, 2, 3, 4, 3, 6] // true
        expect(almostIncreasingSequence(input)).toBe(true)
    }),

    test('should return true if receive [1, 2, 3, 4, 99, 5, 6]', ()=>{
        const input = [1, 2, 3, 4, 99, 5, 6] // true
        expect(almostIncreasingSequence(input)).toBe(true)
    }),

    test('should return true if receive [123, -17, -5, 1, 2, 3, 12, 43, 45]', ()=>{
        const input = [123, -17, -5, 1, 2, 3, 12, 43, 45] // true
        expect(almostIncreasingSequence(input)).toBe(true)
    }),

    test('should return true if receive [3, 5, 67, 98, 3]', ()=>{
        const input = [3, 5, 67, 98, 3] // true
        expect(almostIncreasingSequence(input)).toBe(true)
    })
})