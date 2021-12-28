const reduce = document.getElementById('reduce');
const increase = document.getElementById('increase');
const input = document.getElementById('input');

//todo use const
//todo use .value
let inputValue = input.getAttribute('value');
let inputValueInt = parseInt(inputValue);


reduce.addEventListener('click', (e) => {
    //todo сначало инктремент потом присваниние (inputValueInt)
    input.setAttribute('value', `${inputValueInt -= 1}`);

    if (inputValueInt <= 0) {
        reduce.setAttribute('disabled', '');
    }
    if (inputValueInt <= 9) {
        increase.removeAttribute('disabled');
    }
});


increase.addEventListener('click', (e) => {
    //todo сначало инктремент потом присваниние (inputValueInt)
    input.setAttribute('value', `${inputValueInt += 1}`);
    if (inputValueInt > 0) {
        reduce.removeAttribute('disabled');
    }
    if (inputValueInt >= 9) {
        increase.setAttribute('disabled', '');
    }

});
