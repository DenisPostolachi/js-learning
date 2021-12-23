document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const addButton = document.getElementById('addToList');
    const ol = document.getElementById('orderedList');
    input.focus()
    addButton.setAttribute('disabled', 'true');
    input.onkeyup = () => {
        if (input.value.length > 0) {
            addButton.removeAttribute('disabled');
        }
    }

    addButton.onclick = () => {
        const li = document.createElement("li");
        li.classList.add('li');
        li.appendChild(document.createTextNode(`${input.value}`));
        ol.appendChild(li);
        input.value = null;
        addButton.setAttribute('disabled', 'true');
    }

    window.onclick = e => {
        if (e.target.tagName === 'LI') {
            alert(e.target.innerText);
        }
    }
})