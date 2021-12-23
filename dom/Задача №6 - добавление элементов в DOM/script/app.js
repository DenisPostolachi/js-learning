document.addEventListener('DOMContentLoaded', () => {
    const desk = document.querySelector('#desk')
    for (let i = 0; i < 8; i++) {
        let color = !(i % 2) ? 0 : 1;
        for (let j = 0; j < 8; j++) {
            const div = document.createElement('div');
            div.classList.add(color === 1 ? "black" : "white");
            desk.appendChild(div);
            color = color === 1 ? 0 : 1;
        }
    }

})