class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.days * this.rate;
    }
}

const worker = new Worker('Ivan', 'Ivanov', 777, 10);
const workerCeo = new Worker('Arthur', 'Cocksley', 10000, 20);

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

console.log(workerCeo.name);
console.log(workerCeo.surname);
console.log(workerCeo.rate);
console.log(workerCeo.days);
console.log(workerCeo.getSalary());
