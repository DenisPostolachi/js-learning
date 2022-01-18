const body = document.querySelector('body');
const button = document.querySelector('.btn');

body.classList.add('red-bg');

setTimeout(() => {
    body.classList.add('green-bg');
}, 3000);


//todo remove
const btn = document.querySelector('.btn');


btn.addEventListener('click' ,() => {
    body.classList.toggle('orange-bg')
})

const list = document.getElementById("list");

for (let i = 0; i <= 20; i++) {
    setTimeout(() => {
        const li = document.createElement("li");

        list.appendChild(li);
        li.innerHTML = `${i} Element`;

        if (i % 2) {
            li.classList.add('odd');
        } else {
            li.classList.add('even');
        }
    }, i * 2000);
}

