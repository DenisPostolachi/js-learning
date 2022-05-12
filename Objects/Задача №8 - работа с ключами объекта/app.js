const weekDays = {
    'Mo': 'Понедельник',
    'Tu': 'Вторник',
    'We': 'Среда',
    'Th': 'Четверг',
    'Fr': 'Пятница',
    'Sa': 'Суббота',
    'Su': 'Воскресенье',
}

const translation = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

const translate = () => {
    let i = 0;
    for (const argumentsKey in weekDays) {
        if (weekDays.hasOwnProperty(argumentsKey)) {
            weekDays[argumentsKey] = translation[i++]
        }
    }
}
translate();
console.log(weekDays);

