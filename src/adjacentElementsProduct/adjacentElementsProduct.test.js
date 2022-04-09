const adjacentElementsProduct = require('./adjacentElementsProduct')
describe('Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.', ()=>{

    test('should return 21 if receive the array [3, 6, -2, -5, 7, 3]',()=>{
        expect(adjacentElementsProduct([3, 6, -2, -5, 7, 3])).toBe(21)
    }),

    test('should return 2 if receive the array [-1, -2]', ()=>{
        expect(adjacentElementsProduct([-1, -2])).toBe(2)
    }),

    test('should return 6 if receive the array [5, 1, 2, 3, 1, 4]', () => {
      expect(adjacentElementsProduct([5, 1, 2, 3, 1, 4])).toBe(6)
    }),

    test('should return 6 if receive the array [1, 2, 3, 0]',()=>{
        expect(adjacentElementsProduct([1, 2, 3, 0])).toBe(6)
    }),

    test('should return 50 if receive the array [9, 5, 10, 2, 24, -1, -48]', () => {
        expect(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])).toBe(50)
    }),

    test('should return 30 if receive the array [5, 6, -4, 2, 3, 2, -23]', () => {
        expect(adjacentElementsProduct([5, 6, -4, 2, 3, 2, -23])).toBe(30)
    }),

    test('should return 6 if receive the array [4, 1, 2, 3, 1, 5]', () => {
        expect(adjacentElementsProduct([4, 1, 2, 3, 1, 5])).toBe(6)
    }),
    
    test('should return -12 ir receive the array [-23, 4, -3, 8, -12]', () => {
        expect(adjacentElementsProduct([-23, 4, -3, 8, -12])).toBe(-12)
    }),

    test('should return 0 if receive the array [1, 0, 1, 0, 1000]', () => {
        expect(adjacentElementsProduct([1, 0, 1, 0, 1000])).toBe(0)
    }),

    test('should retorun if receive the array ', () => {
      ;
    });
    
    
})
