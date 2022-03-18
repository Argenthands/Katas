const almostIncreasingSequence = require('./almostIncreasingSequence')

const test_1 = [1, 3, 2, 1] // false
const test_2 = [1, 3, 2] // true
const test_3 = [1, 2, 1, 2] // false
const test_4 = [3, 6, 5, 8, 10, 20, 15] // false
const test_5 = [1, 1, 2, 3, 4, 4] // false
const test_6 = [1, 4, 10, 4, 2] // false
const test_7 = [10, 1, 2, 3, 4, 5] // true
const test_8 = [1, 1, 1, 2, 3] // false
const test_9 = [0, -2, 5, 6] // true
const test_10 = [1, 2, 3, 4, 5, 3, 5, 6] // false
const test_11 = [40, 50, 60, 10, 20, 30] // false
const test_12 = [1, 1] // true
const test_13 = [1, 2, 5, 3, 5] // true
const test_14 = [1, 2, 5, 5, 5] // false
const test_15 = [10, 1, 2, 3, 4, 5, 6, 1] // false
const test_16 = [1, 2, 3, 4, 3, 6] // true
const test_17 = [1, 2, 3, 4, 99, 5, 6] // true
const test_18 = [123, -17, -5, 1, 2, 3, 12, 43, 45] // true
const test_19 = [3, 5, 67, 98, 3] // trues

xdescribe('almostIncreasingSequence', ()=>{

    test(`should return false if receive the array ${test_1}`, ()=>{
        expect(almostIncreasingSequence(test_1)).toBe(false)
    }),

    test(`should return true if receive the array ${test_2}`, ()=>{
        expect(almostIncreasingSequence(test_2)).toBe(true)
    }),

    test(`should return false if receive the array ${test_3}`, ()=>{
        expect(almostIncreasingSequence(test_3)).toBe(false)
    }),

    test(`should return false if receive the array ${test_4}`, ()=>{
        expect(almostIncreasingSequence(test_4)).toBe(false)
    }),

    test(`should return false if receive the array ${test_5}`, ()=>{
        expect(almostIncreasingSequence(test_5)).toBe(false)
    }),

    test(`should return false if receive the array ${test_6}`, ()=>{
        expect(almostIncreasingSequence(test_6)).toBe(false)
    }),

    test(`should return true if receive the array ${test_7}`, ()=>{
        expect(almostIncreasingSequence(test_7)).toBe(true)
    }),

    test(`should return false if receive the array ${test_8}`, ()=>{
        expect(almostIncreasingSequence(test_8)).toBe(false)
    }),

    test(`should return true if receive the array ${test_9}`, ()=>{
        expect(almostIncreasingSequence(test_9)).toBe(true)
    }),

    test(`should return false if receive ${test_10}`, ()=>{
        expect(almostIncreasingSequence(test_10)).toBe(false)
    }),

    test(`should return false if receive ${test_11}`, ()=>{
        expect(almostIncreasingSequence(test_11)).toBe(false)
    }),

    test(`should return true if receive ${test_12}`, ()=>{
        expect(almostIncreasingSequence(test_12)).toBe(true)
    }),

    test(`should return true if receive ${test_13}`, ()=>{
        expect(almostIncreasingSequence(test_13)).toBe(true)
    })
})