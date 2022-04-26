let array = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

let uniqueSorted = arr => {
    return arr.filter((elem, index, self) => {
        return index === self.indexOf(elem);
    })

}

console.log(uniqueSorted(array));