let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let extract = (arr, startPosition, finishPosition) => {
    return arr.splice(startPosition, finishPosition - 1);
}

console.log(extract(nums, 2, 4));