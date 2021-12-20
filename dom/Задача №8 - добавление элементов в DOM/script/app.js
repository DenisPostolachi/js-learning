let button = document.querySelector(".btn");
let input = document.querySelector(".input");
let form = document.querySelector(".form");
let list = document.querySelector(".list li");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = form.querySelector('input[type="text"]').value;

    const li = document.createElement('li');
    const input = document.createElement('span');
    input.textContent = value;

    li.appendChild(input);
    list.appendChild(li);


    console.log(value);
    form.reset();

});

input.addEventListener("focus", (e) => {
    button.disabled = input.value.length === 0;
});

input.addEventListener("input", (e) => {
    button.disabled = input.value.length === 0;
});

list.addEventListener('click', (e)  => {
    alert(e.target.innerText);
});
