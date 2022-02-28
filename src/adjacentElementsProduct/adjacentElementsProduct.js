function adjacentElementsProduct (inputArray){
    let result = Number.MIN_SAFE_INTEGER
    let product
    for(let i=1; i< inputArray.length; i++){
        product = inputArray[i] * inputArray[i-1]
        if(product > result){
            result = product
        }
    }
    return result
}
module.exports = adjacentElementsProduct