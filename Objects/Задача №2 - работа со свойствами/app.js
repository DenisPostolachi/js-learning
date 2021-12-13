let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
    deiLoh: 0
}

let sum = 0;
for (items in salaries) {
    sum += salaries[items];
}

console.log(sum);
