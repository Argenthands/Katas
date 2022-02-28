const comletStatuesColection = require('./comletStatuesColection')

describe('comletStatuesColection', ()=>{
    
    test('should return 3 if receive the array [6, 2, 3, 8]', ()=>{
        expect(comletStatuesColection([6, 2, 3, 8])).toBe(3)
    }),

    test('should return 2 if receive the array [0, 3]', ()=>{
        expect(comletStatuesColection([0, 3])).toBe(2)
    }),

    test('should return 0 if receive the array [5, 4, 6]', ()=>{
        expect(comletStatuesColection([5, 4, 6])).toBe(0)
    }),

    test('should return 2 if receive the array [6, 3]', ()=>{
        expect(comletStatuesColection([6, 3])).toBe(2)
    }),

    test('should return 0 if receive the array [1]', ()=>{
        expect(comletStatuesColection([1])).toBe(0)
    })
})