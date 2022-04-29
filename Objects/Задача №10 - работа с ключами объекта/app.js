let personOne = {
    name: 'Person1',
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: '112',
        email: 'email@domain.com'
    },
    address: 'Moldova'
}

let personTwo = {
    name: 'Person2',
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: '2112',
        email: 'email@domain.kz'
    },
    address: 'Moldova'
}

function findCommonValues(personOne, personTwo) {
    let result = {}

    for (let key in personOne) {
        if (personOne[key] === personTwo[key]) {
            result[key] = personOne[key]
        } else if (typeof personOne[key] === 'object' && personOne[key] !== null) {
            result[key] = findCommonValues(personOne[key], personTwo[key])
        }
    }
    return result;
}

console.log(findCommonValues(personOne, personTwo));