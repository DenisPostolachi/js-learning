const numbersToCount = [1, 2, 4, 5];

let evenSum = numbersToCount.reduce((sum, number) => {
  if (number % 2 === 0) {
    sum += number;
  }

  return sum;
}, 0);

console.log("Even sum:", evenSum);
