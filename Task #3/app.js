const factorial = n => {
    // todo переделать под if ... else

    // return (n !== 1) ? n * factorial(n - 1) : 1;
    if (n !== 1) {
        return n * factorial(n - 1)
    } else {
        return 1
    }
}

console.log(factorial(5))