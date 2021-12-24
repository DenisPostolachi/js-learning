class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get getFullName() {
        return `${this.name} ` + `${this.surname}`
    }

}


class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    get getCourse() {
        return new Date().getFullYear() - this.year;
    }
}

const worker = new User('Andre', 'Pedrito');
const student = new Student('Arthur', 'Cocksley', 2017);


console.log(worker.getFullName)
console.log(student.getFullName);
console.log(student.getCourse);