const commonCharacterCount = require('./commonCharacterCount')

const tests = [
    {
        s1: "aabcc",
        s2: "adcaa",
        output: 3
    },
    {
        s1: "zzzz",
        s2: "zzzzzzz",
        output: 4
    },
    {
        s1: "abca",
        s2: "xyzbac",
        output: 3
    },
    {
        s1: "a",
        s2: "b",
        output: 0
    },
    {
        s1: "a",
        s2: "aaa",
        output: 1
    },
]

describe('Given two strings, find the number of common characters between them.', () => {

    test(`should return 3 if receive "aabcc" and "adcaa"`, () => {
        expect(commonCharacterCount(tests[0].s1, tests[0].s2)).toBe(tests[0].output)
    }),

    test(`should return 4 if receive "zzzz" and "zzzzzz"`, () => {
        expect(commonCharacterCount(tests[1].s1, tests[1].s2)).toBe(tests[1].output)
    }),
    
    test(`should return 3 if receive "abca" and "xyzbac"`, () => {
        expect(commonCharacterCount(tests[2].s1, tests[2].s2)).toBe(tests[2].output)
    }),
    
    test(`should return 0 if receive "a" and "b"`, () => {
        expect(commonCharacterCount(tests[3].s1, tests[3].s2)).toBe(tests[3].output)
    }),
    
    test(`should return 1 if receive "a" and "aaa"`, () => {
        expect(commonCharacterCount(tests[4].s1, tests[4].s2)).toBe(tests[4].output)
    })
    
})