function commonCharacterCount (s1, s2){
    let result = []
    let arr1;
    let arr2;
    if(s1.length > s2.length){
        arr1 = s2.split('')
        arr2 = s1.split('')
    }else{
        arr1 = s1.split('')
        arr2 = s2.split('')
    }
    for(let i=0; i < arr1.length; i++){
        let common = arr2.indexOf(arr1[i], 0)
        if(common > -1){
            result.push(arr2.splice(common,1))
        }
    }
  	result = result.flat()
    return result.length
}
module.exports =  commonCharacterCount