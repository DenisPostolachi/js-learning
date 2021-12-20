const links = document.querySelectorAll('a');
links.forEach((item) => {
    let attributes = item.getAttribute('href');
    if (attributes.includes('https')) {
        item.classList.add('red');
    }
})
