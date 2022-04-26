const numbersToCount = [1, 2, 4, 5];

let evenSum = numbersToCount.reduce((acc, curr) => acc + (curr % 2 === 0 ? curr : 0), 0);
console.log('Even sum:', evenSum);