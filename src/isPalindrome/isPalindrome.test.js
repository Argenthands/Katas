const isPalindrome = require('./isPalindrome')

describe('is the string a Palindrome', ()=>{

    test('should return false if receive two different characters on the same string',()=>{
        expect(isPalindrome('ab')).toBe(false)
        expect(isPalindrome('ba')).toBe(false)
        expect(isPalindrome('xy')).toBe(false)
        expect(isPalindrome('yx')).toBe(false)
    }),

    test('should return true if receive a string with all the characters are the same',()=>{
        expect(isPalindrome('a')).toBe(true)
        expect(isPalindrome('bb')).toBe(true)
        expect(isPalindrome('ccc')).toBe(true)
        expect(isPalindrome('xxxx')).toBe(true)
        expect(isPalindrome('yyyyy')).toBe(true)
        expect(isPalindrome('aaaaaa')).toBe(true)
        expect(isPalindrome('bbbbbbb')).toBe(true)
        expect(isPalindrome('cccccccc')).toBe(true)
        expect(isPalindrome('xxxxxxxxx')).toBe(true)
        expect(isPalindrome('yyyyyyyyyy')).toBe(true)
    }),

    test('should return false if receive a string with the first and the last char are not the same',()=>{
        expect(isPalindrome('abc')).toBe(false)
        expect(isPalindrome('xyz')).toBe(false)
        expect(isPalindrome('abcxyz')).toBe(false)
        expect(isPalindrome('ax')).toBe(false)
    }),
    test('should return true if receive a palindrome string',()=>{
        expect(isPalindrome('aba')).toBe(true)
        expect(isPalindrome('abcba')).toBe(true)
        expect(isPalindrome('xyx')).toBe(true)
        expect(isPalindrome('xyzyx')).toBe(true)
    })
})