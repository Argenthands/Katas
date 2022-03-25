/*
let arr = []
let min = Math.min(...arr) // encontrar el mas chico
let max = Math.max(...arr) // encontrar el mas grande
let newSequence = [...new Set(arr)] // filtrar los repetidos y volver a un array
let list1 = [89, 12, 45, 67, 78, 89, 70, 90, 67, 78]
let list2 = [...new Set(list1)].sort().reverse().splice(0,5) //saca los 5 elementos mas grande
*/

let arr = [89, 12, 45, 67, 78, 89, 70, 90, 67, 78]
if(arr.includes(12)){
    console.log(true)
}