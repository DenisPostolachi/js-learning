class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get getName() {
        return this.name;
    }

    get getSurname() {
        return this.surname;
    }

    set setName(value) {
        this.name = value;
    }

    set setSurname(value) {
        this.surname = value;
    }
}

const worker = new Person('Ivan', 'Ivanov');
console.log(worker.getName)
console.log(worker.getSurname)
worker.setSurname = 'Cocksley';
console.log(worker.getSurname);