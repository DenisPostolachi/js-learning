const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    parent.removeChild(child);
});
