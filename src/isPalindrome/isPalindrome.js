function isPalindrome(inputString){
    const arr = inputString.split('')
    if(arr.length > 0){
        const LENGTH = Math.floor((arr.length)/2)
        for(let i=0; i < LENGTH; i++){
            if(arr[i] != arr[arr.length-i-1]){
                return false
            }
        }
    }
    return true
}

module.exports = isPalindrome