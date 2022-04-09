const ticketIsLucky = require('./ticketIsLucky')
describe('Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.', () => {
    test('should return true if receive 1230', () => {
        expect(ticketIsLucky(1230)).toBe(true)
    }),

    test('should return false if receive 239017', () => {
        expect(ticketIsLucky(239017)).toBe(false)
    }),

    test('should return true if receive 123321', () => {
        expect(ticketIsLucky(123321)).toBe(true)
    }),

    test('should return false if receive "134008"', () => {
        expect(ticketIsLucky(134008)).toBe(true)
    }),

    test('should return false if receive 10', () => {
        expect(ticketIsLucky(10)).toBe(false)
    }),

    test('should return true if receive 11', () => {
        expect(ticketIsLucky(11)).toBe(true)
    }),

    test('should return true if receive 1010', () => {
        expect(ticketIsLucky(1010)).toBe(true)
    }),

    test('should return false if receive 261534', () => {
        expect(ticketIsLucky(261534)).toBe(false)
    }),

    test('should return true if receive 100000', () => {
        expect(ticketIsLucky(100000)).toBe(false)
    }),

    test('should return true if receive 999999', () => {
        expect(ticketIsLucky(999999)).toBe(true)
    }),

    test('should return false if receive 123321', () => {
        expect(ticketIsLucky(123321)).toBe(true)
    }),

    test('should return true if receive 100001', () => {
        expect(ticketIsLucky(100001)).toBe(true)
    })
})