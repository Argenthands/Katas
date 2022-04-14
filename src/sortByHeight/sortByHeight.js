//export function
function sortByHeight(a) {
    let arr = a.filter(x => x !== -1).sort((a, b) => a - b);
    let i = 0;
    for (let j = 0; j < a.length; j++) {
        if (a[j] !== -1) {
            a[j] = arr[i];
            i++;
        }
    }
    return a;
}

module.exports = sortByHeight;