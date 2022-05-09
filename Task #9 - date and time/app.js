const btn = document.getElementById('btn');
const hoursElement = document.getElementById('hrs')
const minutesElement = document.getElementById('mns')
const secondsElement = document.getElementById('scs')
const secondsContainer = document.getElementById('show-seconds')
const minutesContainer = document.getElementById('show-minutes')
const hoursContainer = document.getElementById('show-hours')


hoursElement.addEventListener('keyup', ({target}) => {
    const parsedValue = Number(target.value);

    if (parsedValue > 24) {
        target.value = '';
    }
});

minutesElement.addEventListener('keyup', ({target}) => {
    const parsedValue = Number(target.value);

    if (parsedValue > 60) {
        target.value = '';
    }
});

secondsElement.addEventListener('input', ({target}) => {
    const parsedValue = Number(target.value);

    if (parsedValue > 60) {
        target.value = '';
    }
});


let minutes = 0;
let hours = 0;
let seconds = 0;

const countdownTimer = () => {
    const hoursElement = document.getElementById('hrs')
    const minutesElement = document.getElementById('mns')
    const secondsElement = document.getElementById('scs')

    minutes = Number(minutesElement.value);
    seconds = Number(secondsElement.value);
    hours = Number(hoursElement.value);

    let timer = seconds + minutes * 60 + hours * 60 * 60;
    let timeInterval;

    const updateTimer = () => {
        console.log(timer)

        if (!timer) {
            clearInterval(timeInterval)
        }

        timer--;

        const hours = Math.floor(timer / (60 * 60));
        let divisorForMinutes = timer % (60 * 60);
        const minutes = Math.floor(divisorForMinutes / 60);
        let divisorForSeconds = divisorForMinutes % 60;
        const seconds = Math.ceil(divisorForSeconds);

        secondsContainer.innerText = `${seconds}`
        minutesContainer.innerText = `${minutes}`
        hoursContainer.innerText = `${hours}`

    }

    timeInterval =  setInterval(updateTimer, 1000)
    //todo make method for update time in interface
}

btn.addEventListener('click', () => {
    countdownTimer();
})

