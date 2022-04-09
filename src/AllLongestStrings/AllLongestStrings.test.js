const AllLongestStrings = require('./AllLongestStrings')

describe('Given an array of strings, return another array containing all of its longest strings.', ()=>{

    test('should return ["aba", "vcd", "aba"] if receive ["aba", "aa", "ad", "vcd", "aba"]', ()=>{
        const input = ["aba", "aa", "ad", "vcd", "aba"]
        const output = ["aba", "vcd", "aba"]
        expect(AllLongestStrings(input)).toStrictEqual(AllLongestStrings(output))
    }),

    test('should return ["aa"] if receive ["aa"]', ()=>{
        const input = ["aa"]
        const output = ["aa"]
        expect(AllLongestStrings(input)).toStrictEqual(AllLongestStrings(output))
    }),

    test('should return ["eeee", "abcd"] if receive ["abc", "eeee", "abcd", "dcd"]', ()=>{
        const input = ["abc", "eeee", "abcd", "dcd"]
        const output = ["eeee", "abcd"]
        expect(AllLongestStrings(input)).toStrictEqual(AllLongestStrings(output))
    }),

    test('should return ["zzzzzz", "abcdef", "aaaaaa"] if receive ["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"]', ()=>{
        const input = ["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"]
        const output = ["zzzzzz", "abcdef", "aaaaaa"]
        expect(AllLongestStrings(input)).toStrictEqual(AllLongestStrings(output))
    }),

    test('should return ["varennyky"] if receive ["enyky", "benyky", "yely", "varennyky"]', ()=>{
        const input = ["enyky", "benyky", "yely", "varennyky"]
        const output = ["varennyky"]
        expect(AllLongestStrings(input)).toStrictEqual(AllLongestStrings(output))
    }),

    test('should return ["abacaba"] if receive ["abacaba", "abacab", "abac", "xxxxxx"]', ()=>{
        const input = ["abacaba", "abacab", "abac", "xxxxxx"]
        const output = ["abacaba"]
        expect(AllLongestStrings(input)).toStrictEqual(AllLongestStrings(output))
    }),

    test('should return ["yooooooung", "watermelon"] if receive ["young", "yooooooung", "hot", "or", "not", "come", "on", "fire", "water", "watermelon"]', ()=>{
        const input = ["young", "yooooooung", "hot", "or", "not", "come", "on", "fire", "water", "watermelon"]
        const output = ["yooooooung", "watermelon"]
        expect(AllLongestStrings(input)).toStrictEqual(AllLongestStrings(output))
    }),

    test('should return ["aokbcwthc"] if receive ["onsfnib", "aokbcwthc", "jrfcw"]', ()=>{
        const input = ["onsfnib", "aokbcwthc", "jrfcw"]
        const output = ["aokbcwthc"]
        expect(AllLongestStrings(input)).toStrictEqual(AllLongestStrings(output))
    }),

    test('should return ["lbgwyqkry"] if receive ["lbgwyqkry"]', ()=>{
        const input = ["lbgwyqkry"]
        const output = ["lbgwyqkry"]
        expect(AllLongestStrings(input)).toStrictEqual(AllLongestStrings(output))
    }),

    test('should return ["i"] if receive ["i"]', ()=>{
        const input = ["i"]
        const output = ["i"]
        expect(AllLongestStrings(input)).toStrictEqual(AllLongestStrings(output))
    }),

    test('should return [""] if receive [""]', ()=>{
        const input = [""]
        const output = [""]
        expect(AllLongestStrings(input)).toStrictEqual(AllLongestStrings(output))
    })
})