const input = document.querySelector('#input');


input.addEventListener('input', () => {
    const value = input.value;
    if (typeof(value) != 'number') {
        input.setAttribute('type', 'number');
    }
    console.log(typeof(value));
});
