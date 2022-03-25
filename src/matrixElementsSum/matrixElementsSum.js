function matrixElementsSum (matrix){
    let sum = 0
    let hauntedRooms = []
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            if(!(hauntedRooms.includes(j))){
                if(matrix[i][j] === 0){
                    hauntedRooms.push(j)
                }
                sum += matrix[i][j]
            }
        }
    }
    return sum
}

module.exports = matrixElementsSum