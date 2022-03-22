/*
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
    x13 :{//eror
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
    x16 :{//eror
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
*/
function almostIncreasingSequence(sequence){
    if(sequence.length < 3){
        return true
    }
    let newSequence = []
    for(let i=0; i<sequence.length; i++){
        if(i>0 && i<sequence.length-1){
            if(sequence[i]>newSequence[newSequence.length-1]){
                newSequence.push(sequence[i])
            }else if(sequence[i]>newSequence[newSequence.length-2]){
                newSequence[newSequence.length-1] = sequence[i]
            }
        }else if(i===0){
            if(sequence[0]<sequence[1]){
                newSequence.push(sequence[0])
            }else if(sequence[1]<sequence[2]){
                newSequence.push(sequence[1])
            }else{
                return false
            }
        }else if(sequence[i]>newSequence[newSequence.length-1]){
            newSequence.push(sequence[i])
        }
    }
    control = newSequence
    if(newSequence.length+1 < sequence.length){
        return false
    }
    return true
}

/*
const EXECUTOR = [
    almostIncreasingSequence(test.x1.arr),
    almostIncreasingSequence(test.x2.arr),
    almostIncreasingSequence(test.x3.arr),
    almostIncreasingSequence(test.x4.arr),
    almostIncreasingSequence(test.x5.arr),
    almostIncreasingSequence(test.x6.arr),
    almostIncreasingSequence(test.x7.arr),
    almostIncreasingSequence(test.x8.arr),
    almostIncreasingSequence(test.x9.arr),
    almostIncreasingSequence(test.x10.arr),
    almostIncreasingSequence(test.x11.arr),
    almostIncreasingSequence(test.x12.arr),
    almostIncreasingSequence(test.x13.arr),
    almostIncreasingSequence(test.x14.arr),
    almostIncreasingSequence(test.x15.arr),
    almostIncreasingSequence(test.x16.arr),
    almostIncreasingSequence(test.x17.arr),
    almostIncreasingSequence(test.x18.arr),
    almostIncreasingSequence(test.x19.arr)
];
for(let i=0; i<EXECUTOR.length; i++){
    let testElement = 'x'.concat(i+1)
    console.log(i+1,EXECUTOR[i], test[testElement].res)
}
*/

module.exports = almostIncreasingSequence