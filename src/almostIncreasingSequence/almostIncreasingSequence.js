const test = {
    x1 :{
        arr: [1, 3, 2, 1], 
        res: false,
    },
    x2 :{
        arr: [1, 3, 2],
        res: true,
    },
    x3 :{
        arr: [1, 2, 1, 2], 
        res: false,
    },
    x4 :{
        arr: [3, 6, 5, 8, 10, 20, 15], 
        res: false,
    },
    x5 :{
        arr: [1, 1, 2, 3, 4, 4], 
        res: false,
    },
    x6 :{
        arr: [1, 4, 10, 4, 2], 
        res: false,
    },
    x7 :{
        arr: [10, 1, 2, 3, 4, 5],
        res: true,
    },
    x8 :{
        arr: [1, 1, 1, 2, 3], 
        res: false,
    },
    x9 :{
        arr: [0, -2, 5, 6],
        res: true,
    },
    x10 :{
        arr: [1, 2, 3, 4, 5, 3, 5, 6], 
        res: false,
    },
    x11 :{
        arr: [40, 50, 60, 10, 20, 30], 
        res: false,
    },
    x12 :{
        arr: [1, 1],
        res: true,
    },
    x13 :{
        arr: [1, 2, 5, 3, 5],
        res: true,
    },
    x14 :{
        arr: [1, 2, 5, 5, 5], 
        res: false,
    },
    x15 :{
        arr: [10, 1, 2, 3, 4, 5, 6, 1], 
        res: false,
    },
    x16 :{
        arr: [1, 2, 3, 4, 3, 6],
        res: true,
    },
    x17 :{
        arr: [1, 2, 3, 4, 99, 5, 6],
        res: true,
    },
    x18 :{
        arr: [123, -17, -5, 1, 2, 3, 12, 43, 45],
        res: true,
    },
    x19 :{
        arr: [3, 5, 67, 98, 3],
        res: true,
    },
}

function almostIncreasingSequence(sequence){
    if(sequence.length < 3){
        return true
    }
    let newSequence = [...new Set(sequence)]
}
console.log('1 -->',almostIncreasingSequence(test.x1.arr), test.x1.res)
console.log('2 -->',almostIncreasingSequence(test.x2.arr), test.x2.res)
console.log('3 -->',almostIncreasingSequence(test.x3.arr), test.x3.res)
console.log('4 -->',almostIncreasingSequence(test.x4.arr), test.x4.res)
console.log('5 -->',almostIncreasingSequence(test.x5.arr), test.x5.res)
console.log('6 -->',almostIncreasingSequence(test.x6.arr), test.x6.res)
console.log('7 -->',almostIncreasingSequence(test.x7.arr), test.x7.res)
console.log('8 -->',almostIncreasingSequence(test.x8.arr), test.x8.res)
console.log('9 -->',almostIncreasingSequence(test.x9.arr), test.x9.res)
console.log('10 -->',almostIncreasingSequence(test.x10.arr), test.x10.res)
console.log('11 -->',almostIncreasingSequence(test.x11.arr), test.x11.res)
console.log('12 -->',almostIncreasingSequence(test.x12.arr), test.x12.res)
console.log('13 -->',almostIncreasingSequence(test.x13.arr), test.x13.res)
console.log('14 -->',almostIncreasingSequence(test.x14.arr), test.x14.res)
console.log('15 -->',almostIncreasingSequence(test.x15.arr), test.x15.res)
console.log('17 -->',almostIncreasingSequence(test.x17.arr), test.x17.res)
console.log('16 -->',almostIncreasingSequence(test.x16.arr), test.x16.res)
console.log('18 -->',almostIncreasingSequence(test.x18.arr), test.x18.res)
console.log('19 -->',almostIncreasingSequence(test.x19.arr), test.x19.res)
/*
*/
module.exports = almostIncreasingSequence