class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

     getName() {
        return this.name;
    }

     getSurname() {
        return this.surname;
    }

     setName(value) {
        this.name = value;
    }

     setSurname(value) {
        this.surname = value;
    }
}

const worker = new Person('Ivan', 'Ivanov');
console.log(worker.getName)
console.log(worker.getSurname)
worker.setSurname('Cocksley');
console.log(worker.getSurname);
