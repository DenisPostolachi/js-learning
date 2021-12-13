const weekDays = {
    'Mo': 'Luni',
    'Tu': 'Marti',
    'We': 'Miercuri',
    'Th': 'Joi',
    'Fr': 'Vineri',
    'Sa': 'Simbata',
    'Su': 'Duminica'
}


let keyValuesSwap = (obj) => {
    let keys = Object.keys(obj);
    let values = Object.values(obj);
    return Object.assign(...values.map((k, i) => ({[k]: keys[i]})))
}

console.log(keyValuesSwap(weekDays));