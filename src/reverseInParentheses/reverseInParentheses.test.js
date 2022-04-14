const reverseInParentheses = require('./reverseInParentheses');
describe('reverses characters in (possibly nested) parentheses in the input string.', () => {

    test('should return "rab" if receive "(bar)"', () => {
        let input = '(bar)'
        let output = 'rab'
        expect(reverseInParentheses(input)).toEqual(output)
    }),

    test('should return "foorabbaz" if receive "foo(bar)baz"', () => {
        let input = 'foo(bar)baz'
        let output = 'foorabbaz'
        expect(reverseInParentheses(input)).toEqual(output)
    }),

    test('should return "foorabbazmilb" if receive "foo(bar)baz(blim)"', () => {
        let input = 'foo(bar)baz(blim)'
        let output = 'foorabbazmilb'
        expect(reverseInParentheses(input)).toEqual(output)
    }),

    test('should return "foobazrabblim" if receive "foo(bar(baz))blim"', () => {
        let input = 'foo(bar(baz))blim'
        let output = 'foobazrabblim'
        expect(reverseInParentheses(input)).toEqual(output)
    }),

    test('should return "" if receive ""', () => {
        let input = ''
        let output = ''
        expect(reverseInParentheses(input)).toEqual(output)
    }),

    test('should return "" if receive "()"', () => {
        let input = '()'
        let output = ''
        expect(reverseInParentheses(input)).toEqual(output)
    }),

    test('should return "cbadgfe" if receive "(abc)d(efg)"', () => {
        let input = '(abc)d(efg)'
        let output = 'cbadgfe'
        expect(reverseInParentheses(input)).toEqual(output)
    })
})