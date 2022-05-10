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

const keys = Object.keys(weekDays)
const values = Object.values(translatedWeekDays)

const result = {};
keys.forEach((key, index) => result[key] = values[index]);
console.log(result);

