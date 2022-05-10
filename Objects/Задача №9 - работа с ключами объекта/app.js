const weekDays = {
    'Mo': 'Luni',
    'Tu': 'Marti',
    'We': 'Miercuri',
    'Th': 'Joi',
    'Fr': 'Vineri',
    'Sa': 'Simbata',
    'Su': 'Duminica'
}



// todo
const keyValuesSwap2 = (obj) => {
    return Object.keys(obj).map(key => {
        return { [obj[key]]: key }
    })
}


console.log(keyValuesSwap2(weekDays));