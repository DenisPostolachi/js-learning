let colors = ["white", "blue", "yellow", "black", "red", "green"];
const [firstColor, secondColor, ...tail] = colors;
console.log(firstColor)
console.log(secondColor)
console.log(tail);