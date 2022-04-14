const sortByHeight = require('./sortByHeight');
describe('Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!',()=>{
    
    test('should return [-1, 150, 160, 170, -1, -1, 180, 190] if receive [-1, 150, 190, 170, -1, -1, 160, 180]', () => {
        let input = [-1, 150, 190, 170, -1, -1, 160, 180]
        let output = [-1, 150, 160, 170, -1, -1, 180, 190]
        expect(sortByHeight(input)).toEqual(output)
    }),
    
    test('should return [-1, -1, -1, -1, -1] if receive [-1, -1, -1, -1, -1]', () => {
        let input = [-1, -1, -1, -1, -1]
        let output = [-1, -1, -1, -1, -1]
        expect(sortByHeight(input)).toEqual(output)
    }),

    test('should return [-1] if receive [-1]', () => {
        let input = [-1]
        let output = [-1]
        expect(sortByHeight(input)).toEqual(output)
    }),

    test('should return [2, 2, 4, 9, 11, 16] if receive [4, 2, 9, 11, 2, 16]', () => {
        let input = [4, 2, 9, 11, 2, 16]
        let output = [2, 2, 4, 9, 11, 16]
        expect(sortByHeight(input)).toEqual(output)
    }),

    test('should return [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2] if receive [2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]', () => {
        let input = [2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]
        let output = [1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2]
        expect(sortByHeight(input)).toEqual(output)
    }),

    test('should return [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77] if receive [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]', ()=>{
        let input = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]
        let output = [1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]
        expect(sortByHeight(input)).toEqual(output)
    })
})