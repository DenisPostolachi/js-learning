const container = document.querySelector('.link-container');

// todo todo get elements from html

for (let i = 0; i < container.children.length; i++) {
    if (container.children[i].innerText.startsWith('https')) {
        container.children[i].classList.add('red');
    }
}

