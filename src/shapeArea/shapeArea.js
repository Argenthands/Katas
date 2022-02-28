function shapeArea(n){
    if(n===1){
        return 1
    }else{
        return shapeArea(n-1)+4*(n-1)
    }
}
module.exports = shapeArea

    /*
    1 --> 1
    2 --> 5 --> 4+1
    3 --> 13 --> 8+5
    4 --> 25 --> 12+13
    f(x)= 4*(n-1)+f(x-1)
    */