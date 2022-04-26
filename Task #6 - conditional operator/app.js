const number = prompt('Insert a number');
if (number > 0 ){
    alert(1)
} else if (number < 0) {
    alert(-1)
} else if (Number(number) === 0) {
    alert(0)
} else {
    alert("Error")
}