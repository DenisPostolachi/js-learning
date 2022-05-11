document.addEventListener('DOMContentLoaded', () => {
    const desk = document.querySelector('#desk')
    for (let i = 0; i < 8; i++) {
        
        for (let j = 0; j < 8; j++) {
            const div = document.createElement('div');

            if (!(i % 2) && !(j % 2) || (i % 2) && (j % 2)) {
                div.classList.add("black")
            } else {
                div.classList.add("white")
            }

            desk.appendChild(div);
        }
    }

})