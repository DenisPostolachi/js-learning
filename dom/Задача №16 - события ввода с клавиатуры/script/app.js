const input = document.querySelector('#input');

input.addEventListener('keydown', (e) => {
    if (!Number(e.key)) {
        e.preventDefault();
    }
});
