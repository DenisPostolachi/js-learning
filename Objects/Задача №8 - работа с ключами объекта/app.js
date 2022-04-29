const weekDays = {
    'Mo': 'Понедельник',
    'Tu': 'Вторник',
    'We': 'Среда',
    'Th': 'Четверг',
    'Fr': 'Пятница',
    'Sa': 'Суббота',
    'Su': 'Воскресенье',
}

const translatedWeekDays = {
    'Mo': 'Luni',
    'Tu': 'Marti',
    'We': 'Miercuri',
    'Th': 'Joi',
    'Fr': 'Vineri',
    'Sa': 'Simbata',
    'Su': 'Duminica',
}

// todo
for (let weekDay in weekDays) {
    weekDays[weekDay] = translatedWeekDays[weekDay]
}

for (let weekDay in weekDays) {
    if (weekDays[weekDay] == 'Понедельник') {
        weekDays[weekDay] = 'Luni'
    }
    if (weekDays[weekDay] == 'Вторник') {
        weekDays[weekDay] = 'Marti'
    }
    if (weekDays[weekDay] == 'Среда') {
        weekDays[weekDay] = 'Miercuri'
    }
    if (weekDays[weekDay] == 'Четверг') {
        weekDays[weekDay] = 'Joi'
    }
    if (weekDays[weekDay] == 'Пятница') {
        weekDays[weekDay] = 'Vineri'
    }
    if (weekDays[weekDay] == 'Суббота') {
        weekDays[weekDay] = 'Simbata'
    }
    if (weekDays[weekDay] == 'Воскресенье') {
        weekDays[weekDay] = 'Duminica'
    }
}

console.log(weekDays)