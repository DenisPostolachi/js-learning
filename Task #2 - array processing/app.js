const numberArray = Array.from({length: 10}, () => Math.floor(Math.random() * 30));

console.log(numberArray)

console.log(numberArray.filter(item => item < 5))

const max = Math.max(...numberArray);
const min = Math.min(...numberArray);
const indexMax = numberArray.indexOf(max);
const indexMin = numberArray.indexOf(min);
console.log(`index of min is ${indexMin} | index of max is ${indexMax}`)

console.log(numberArray.sort((a, b) => a.value - b.value));

const biggerThenAvg = numberArray.filter(value => value > numberArray.reduce((acc, currentValue) => acc + currentValue) / numberArray.length);
console.log(`bigger then avg. are - ${biggerThenAvg}`)
