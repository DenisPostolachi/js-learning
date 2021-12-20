const input = document.querySelector('#input');


input.addEventListener('input', () => {
    const value = input.value;
    if (typeof(value) != 'number') {
        input.setAttribute('type', 'number');
        // input.value = '';
    }
    console.log(typeof(value));
});
