function generateSquare (n){
    console.log(
        Array(n).fill(' + '.repeat(n)).join('\n')
    )
}
generateSquare(5)