const body = document.querySelector('body');
const btn = document.querySelector('.btn');

body.classList.add('red-bg');

setTimeout(() => {
    body.classList.add('green-bg');
}, 3000);


btn.addEventListener('click' ,() => {
    body.classList.toggle('orange-bg')
})

const list = document.getElementById("list");

for (let i = 0; i <= 20; i++) {
    setTimeout(() => {
        const li = document.createElement("li");

        li.innerHTML = `${i} Element`;

        if (i % 2) {
            li.classList.add('odd');
        } else {
            li.classList.add('even');
        }

        list.appendChild(li);
    }, i * 2000);
}

