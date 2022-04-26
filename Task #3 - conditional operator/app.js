const a = 1;
const b = 2;
const c = 3;
const numberWrapper = [];

numberWrapper.push(a, b, c);
const min = Math.min(...numberWrapper);
const max = Math.max(...numberWrapper);

console.log(min);
console.log(max);