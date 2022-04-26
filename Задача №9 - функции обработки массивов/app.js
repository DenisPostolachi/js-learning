let array = [1, 'a', 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];
let arrayFilter = arr => {
    return arr.filter(item => typeof item === "number");
}

console.log(arrayFilter(array));