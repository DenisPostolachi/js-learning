let startCount;
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')

const update = () => {
    //TODO let -> const;
    //TODO remove from scope
    let clock = document.getElementById('clock');
    let date = new Date();

    let hours = date.getHours();
    //TODO normal condition
    if (hours < 10) hours = `0${hours}`;
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = `0${minutes}`
    clock.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = `0${seconds}`
    clock.children[2].innerHTML = seconds;
}

startBtn.addEventListener('click', () => {
    startCount = setInterval(update, 1000);
    update();
})

stopBtn.addEventListener('click', () => {
    clearInterval(startCount);
})

