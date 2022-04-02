const AllLongestStrings = require('./AllLongestStrings')

const tests = [
    {
        input: ["aba", "aa", "ad", "vcd", "aba"],
        output: ["aba", "vcd", "aba"]
    },
    {
        input: ["aa"],
        output: ["aa"]
    },
    {
        input: ["abc", "eeee", "abcd", "dcd"],
        output: ["eeee", "abcd"]
    },
    {
        input: ["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"],
        output: ["zzzzzz", "abcdef", "aaaaaa"]
    },
    {
        input: ["enyky", "benyky", "yely", "varennyky"],
        output: ["varennyky"]
    },
    {
        input: ["abacaba", "abacab", "abac", "xxxxxx"],
        output: ["abacaba"]
    },
    {
        input: ["young", "yooooooung", "hot", "or", "not", "come", "on", "fire", "water", "watermelon"],
        output: ["yooooooung", "watermelon"]
    },
    {
        input: ["onsfnib", "aokbcwthc", "jrfcw"],
        output: ["aokbcwthc"]
    },
    {
        input: ["lbgwyqkry"],
        output: ["lbgwyqkry"]
    },
    {
        input: ["i"],
        output: ["i"]
    },
    {
        input: [],
        output: []
    },
    {
        input: [],
        output: []
    },
]

describe('Given an array of strings, return another array containing all of its longest strings.', ()=>{

    test('', ()=>{
        expect(AllLongestStrings(tests[0].input)).toStrictEqual(AllLongestStrings(tests[0].output))
    }),

    test('', ()=>{
        expect(AllLongestStrings(tests[1].input)).toStrictEqual(AllLongestStrings(tests[1].output))
    }),

    test('', ()=>{
        expect(AllLongestStrings(tests[2].input)).toStrictEqual(AllLongestStrings(tests[2].output))
    }),

    test('', ()=>{
        expect(AllLongestStrings(tests[3].input)).toStrictEqual(AllLongestStrings(tests[3].output))
    }),

    test('', ()=>{
        expect(AllLongestStrings(tests[4].input)).toStrictEqual(AllLongestStrings(tests[4].output))
    }),

    test('', ()=>{
        expect(AllLongestStrings(tests[5].input)).toStrictEqual(AllLongestStrings(tests[5].output))
    }),

    test('', ()=>{
        expect(AllLongestStrings(tests[6].input)).toStrictEqual(AllLongestStrings(tests[6].output))
    }),

    test('', ()=>{
        expect(AllLongestStrings(tests[7].input)).toStrictEqual(AllLongestStrings(tests[7].output))
    }),

    test('', ()=>{
        expect(AllLongestStrings(tests[8].input)).toStrictEqual(AllLongestStrings(tests[8].output))
    }),

    test('', ()=>{
        expect(AllLongestStrings(tests[9].input)).toStrictEqual(AllLongestStrings(tests[9].output))
    })
})