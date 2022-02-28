const shapeArea = require('./shapeArea')
describe('shapeArea',()=>{

    test('should return 1 if receive 1',() => {
        expect(shapeArea(1)).toBe(1)
    }),

    test('should return 5 if receive 2', () => {
        expect(shapeArea(2)).toBe(5)
    }),
    
    test('should return 13 if receive 3',()=>{
        expect(shapeArea(3)).toBe(13)
    }),

    test('should return 25 if receive 4', () => {
        expect(shapeArea(4)).toBe(25)
    }),

    test('should return 41 if receive 5', () => {
        expect(shapeArea(5)).toBe(41)
    }),

    test('should 97986001 if receive 7000', () => {
        expect(shapeArea(7000)).toBe(97986001)
    });

})