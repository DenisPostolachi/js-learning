const input = document.querySelector('#input');

//todo
input.addEventListener('keydown', (e) => {
    if (!Number(e.key)) {
        e.preventDefault();
    }
});
