let arr = [1,2,3,4,5]
let min = Math.min(...arr)
let max = Math.max(...arr)
console.table([[min,arr.indexOf(min)], [max, arr.indexOf(max)]])
let newSequence = [...new Set(arr)]
console.log(newSequence)
