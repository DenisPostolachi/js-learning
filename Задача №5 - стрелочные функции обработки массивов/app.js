let square = (arr) => {
    return arr.map((x) => {
        return Math.pow(x, 2);
    });
}

let convert = (fn, arr) => {
    return arr.map(fn);
}

let nums = [2, 5, 9];
console.log(convert(square, nums));
