const box = document.querySelector('#box');

box.addEventListener('click', () => {
    const width = box.offsetWidth;
    const height = box.offsetHeight;

    box.style.width = `${width * 2}px`
    box.style.height = `${height * 2}px`

    console.log(`${width} | ${height}`)
})








