const reduce = document.querySelector('.reduce');
const increase = document.querySelector('.increase');
const input = document.getElementById('input');


let inputValue = input.getAttribute('value');
let inputValueInt = parseInt(inputValue);


reduce.addEventListener('click', (e) => {
    input.setAttribute('value', `${inputValueInt -= 1}`);
    if (inputValueInt <= 0) {
        reduce.setAttribute('disabled', '');
    }
    if (inputValueInt <= 9) {
        increase.removeAttribute('disabled');
    }

});


increase.addEventListener('click', (e) => {
    input.setAttribute('value', `${inputValueInt += 1}`);
    if (inputValueInt > 0) {
        reduce.removeAttribute('disabled');
    }
    if (inputValueInt >= 9) {
        increase.setAttribute('disabled', '');
    }

});