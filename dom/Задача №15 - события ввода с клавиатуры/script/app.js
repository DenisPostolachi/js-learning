const input = document.querySelector('#input');


input.addEventListener('blur', () => {
   let value = document.querySelector('#input').value;
   let valueInt = parseInt(value);
    if (valueInt < 5 || valueInt > 10) {
        input.value = '';
    }

});

