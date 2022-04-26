const age = Math.floor(Math.random() * 100);
console.log("Random age number = " + age)

if (!(age > 14 && age < 90)) {
    console.log("Range 1")
}

console.log("-----------------------------------------")

if (age > 90 || age < 14 ) {
    console.log("Range 2")
}