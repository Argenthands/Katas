function AllLongestStrings(inputArray) {
    let longestElement = 0
    let outputArray = []
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > longestElement) {
            longestElement = inputArray[i].length
            outputArray.length = 0
            outputArray[0] = inputArray[i]
        } else if (inputArray[i].length === longestElement) {
            outputArray.push(inputArray[i])
        }
    }
    return outputArray
}

module.exports = AllLongestStrings