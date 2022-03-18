// 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597, ...

function Recursive(n){
    if(n < 2) return n
    return Recursive(n - 2) + Recursive(n - 1)
}

function Iterative(n){
    const list = [0, 1]

    for(let i=2; i<= n; i++){
        list[i] = list[i-2]+list[i-1]
    }

    return list[n]
}


module.exports = {
    Recursive,
    Iterative
}