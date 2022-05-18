function useReverse(arr) {
    let result = []
    let index = 0
    while (arr[index] !== ')') {
        if (arr[index] === '(') {
            let add = useReverse(arr.slice(index + 1))
            index = index + add.length + 1
            result.concat(add)
        }
        if (arr[index] === ')') {
            return result
        }
        result.push(arr[index])
        index++
    }
}
function reverseInParentheses(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[index] === '(') {
            let add = useReverse(arr.slice(index + 1))
            index = index + add.length + 1
            result.concat(add)
        } else {
            result.push(arr[i])
        }
    }
    return result
}
module.exports = reverseInParentheses;