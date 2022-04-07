function completStatuesColection(statues) {
    let max = Math.max.apply(null, statues)
    let min = Math.min.apply(null, statues)
    let tot = statues.length - 1
    return max - min - tot
}
module.exports = completStatuesColection