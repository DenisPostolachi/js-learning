class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname
    }
}

const worker = new Person('Ivan', 'Ivanov');
console.log(worker.name);
console.log(worker.surname);