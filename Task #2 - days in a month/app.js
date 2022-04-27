const daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
}

console.log(daysInMonth(2,2022))
console.log(daysInMonth(3,2021))