document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const addButton = document.getElementById('addToList');
    const ol = document.getElementById('orderedList');
    input.focus()
    //todo .disabled
    addButton.setAttribute('disabled', 'true');

    //todo use addEventListener
    input.onkeyup = () => {
        //todo if (input.value.length)
        if (input.value.length > 0) {
            addButton.removeAttribute('disabled');
        }
    }

    //todo use addEventListener
    addButton.onclick = () => {
        const li = document.createElement("li");
        li.classList.add('li');
        // todo всегда в доме должны быть 2 тэга рядом, .append
        li.appendChild(document.createTextNode(`${input.value}`));
        ol.appendChild(li);
        //todo ""?
        input.value = null;
        addButton.setAttribute('disabled', 'true');
    }

    //todo use addEventListener
    //todo ставить листенер на список
    window.onclick = e => {
        if (e.target.tagName === 'LI') {
            alert(e.target.innerText);
        }
    }
})
