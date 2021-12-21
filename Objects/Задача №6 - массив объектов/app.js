let points = [
    [1, 2],
    [3, 4],
    [null,  4],
    [3, undefined]
]
const checkPoints = (arr) => {
    return arr.filter(item => item[0] && item[1])
};

console.log(checkPoints(points));