
ticketIsLucky = function(n) {
    //split n
    let arr = n.toString().split('');
    if(arr.length % 2 === 0) {
        let half = arr.length / 2;
        let fistHalf =0;
        let secondHalf = 0;
        for(let i=0; i<arr.length; i++) {
            if(i<half) fistHalf += parseInt(arr[i]);
            else secondHalf += parseInt(arr[i]);
        }
        return fistHalf === secondHalf;
    }
    return false
}

module.exports = ticketIsLucky;