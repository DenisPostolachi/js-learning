const factorial = n => {
    // todo переделать под if ... else
    return (n !== 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(5))