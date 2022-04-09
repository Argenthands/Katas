const commonCharacterCount = require('./commonCharacterCount')
describe('Given two strings, find the number of common characters between them.', () => {

    test(`should return 3 if receive "aabcc" and "adcaa"`, () => {
        expect(commonCharacterCount("aabcc", "adcaa")).toBe(3)
    }),

    test(`should return 4 if receive "zzzz" and "zzzzzz"`, () => {
        expect(commonCharacterCount("zzzz", "zzzzzzz")).toBe(4)
    }),
    
    test(`should return 3 if receive "abca" and "xyzbac"`, () => {
        expect(commonCharacterCount("abca", "xyzbac")).toBe(3)
    }),
    
    test(`should return 0 if receive "a" and "b"`, () => {
        expect(commonCharacterCount("a", "b")).toBe(0)
    }),
    
    test(`should return 1 if receive "a" and "aaa"`, () => {
        expect(commonCharacterCount("a", "aaa")).toBe(1)
    }),

    test(`should return 0 if receive "a" and "aa"`, () => {
        expect(commonCharacterCount("a", "aa")).toBe(1)
    }),
    
    test(`should return 0 if receive "cab" and "baaa"`, () => {
        expect(commonCharacterCount("cab", "baaa")).toBe(2)
    })
})