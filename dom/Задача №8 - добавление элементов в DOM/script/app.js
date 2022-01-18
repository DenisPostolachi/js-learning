let button = document.querySelector(".btn");
let input = document.querySelector(".input");
let form = document.querySelector(".form");
let list = document.querySelector(".list li");

button.disabled = true;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = form.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const input = document.createElement('span');
    input.textContent = value;
    li.appendChild(input);
    list.appendChild(li);
    form.reset();
    button.disabled = true;
});


input.addEventListener('input', (e) => {

    button.disabled = !e.target.value;

})

list.addEventListener('click', (e)  => {
    alert(e.target.innerText);
});





