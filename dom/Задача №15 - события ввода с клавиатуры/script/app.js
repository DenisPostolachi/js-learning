const input = document.querySelector('#input');

input.addEventListener('blur', ({target}) => {
    const parsedValue = Number(target.value);

    if (parsedValue < 5 || parsedValue > 10) {
        target.value = '';
    }
});

