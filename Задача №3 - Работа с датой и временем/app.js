const btn = document.getElementById('btn');
const textContainer = document.getElementById('text-container');
const hoursElement = document.getElementById('hrs')
const minutesElement = document.getElementById('mns')
const secondsElement = document.getElementById('scs')
const showHours =

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

secondsElement.addEventListener('keyup', ({target}) => {
    const parsedValue = Number(target.value);

    if (parsedValue > 60) {
        target.value = '';
    }
});


let minutes = 0;
let hours = 0;
let seconds = 0;
let start = 0;

//TODO remove document.getElementById
const countdownTimer = () => {

    if (start === 0 && minutesElement && secondsElement) {

        minutes = Number(minutesElement.value);
        seconds = Number(document.getElementById('scs').value);
        hours = Number(document.getElementById('hrs').value);

        if (isNaN(minutes)) minutes = 0;
        if (isNaN(seconds)) seconds = 0;

        minutesElement.value = minutes;
        document.getElementById('scs').value = seconds;
        document.getElementById('hrs').value = hours;
        start = 1;
        document.getElementById('btn').setAttribute('disabled', 'disabled');
    }

    //TODO remove === 0
    if (minutes === 0 && seconds === 0 && hours === 0) {
        start = 0;
        document.getElementById('btn').removeAttribute('disabled');
        textContainer.innerText = 'Count is over'
        return false;
    }

    seconds--;
    if (seconds < 0) {
        if (minutes > 0) {
            seconds = 59;
            minutes--;
        } else {
            seconds = 0;
            minutes = 0;
        }
    }

    if (minutes === 0 && seconds === 0) {
        hours--;
        minutes = 60;
    }

    document.getElementById('showhrs').innerHTML = hours;
    document.getElementById('showmns').innerHTML = minutes;
    document.getElementById('showscs').innerHTML = seconds;
    setTimeout('countdownTimer()', 1000);
}

btn.addEventListener('click', () => {
    countdownTimer();
})

