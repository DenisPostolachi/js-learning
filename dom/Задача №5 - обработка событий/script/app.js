const reduce = document.getElementById('reduce');
const increase = document.getElementById('increase');
const input = document.getElementById('input');

const inputValue = input.value;
let inputValueInt = Number(inputValue);


reduce.addEventListener('click', (e) => {
    inputValueInt -= 1
    input.setAttribute('value', inputValueInt);

    if (inputValueInt <= 0) {
        reduce.setAttribute('disabled', '');
    }
    if (inputValueInt <= 9) {
        increase.removeAttribute('disabled');
    }
});


increase.addEventListener('click', (e) => {
    inputValueInt += 1
    input.setAttribute('value', inputValueInt);
    if (inputValueInt > 0) {
        reduce.removeAttribute('disabled');
    }
    if (inputValueInt >= 9) {
        increase.setAttribute('disabled', '');
    }

});
