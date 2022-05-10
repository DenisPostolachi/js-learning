const fib = n => {
    // return n <= 1 ? n : fib(n - 1) + fib(n - 2);
    if (n <= 1) {
        return n
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}

console.log(fib(7))