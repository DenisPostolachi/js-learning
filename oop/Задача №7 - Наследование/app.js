class Animal {
    constructor(food, location) {
        this.food = food
        this.location = location
    }
    makeNoise() {
        console.log('this animal is making noise')
    }
    eat() {
        console.log(`this animal is eating ${this.food}`)
    }
    sleep() {
        console.log('this animal is sleeping')
    }
}

class Cat extends Animal {
    constructor(food, location, isMeow) {
        super(food, location);
        this.isMeow = isMeow;
    }
    makeNoise() {
        console.log('cat is making noise')
    }
    eat() {
        console.log(`cat is eating ${this.food}`)
    }
}

const cat = new Cat('fish', 'yard', true);
// console.log(cat);
// cat.makeNoise();
// cat.eat();


class Dog extends Animal {
    constructor(food, location, bite) {
        super(food, location);
        this.bite = bite;
    }
    makeNoise() {
        console.log('dog is making noise')
    }
    eat() {
        console.log(`dog is eating ${this.food}`)
    }
}

const dog = new Dog('shit', 'kennel', true);
// console.log(dog);
// dog.makeNoise();
// dog.eat();

class Horse extends Animal {
    constructor(food, location, isStolenByGypsies) {
        super(food, location);
        this.isStolenByGypsies = isStolenByGypsies;
    }
    makeNoise() {
        console.log('horse is making noise')
    }
    eat() {
        console.log(`horse is eating ${this.food}`)
    }
}

const horse = new Horse('hay', 'field', false);
// console.log(horse);
// horse.makeNoise();
// horse.eat();

class Doctor {
    treatAnimal(animal) {
        console.log(animal.food, "|", animal.location);
    }
}

const veterinar = new Doctor();
// veterinar.treatAnimal(horse);
// veterinar.treatAnimal(cat);
// veterinar.treatAnimal(dog);

const animalArray = [];
animalArray.push(horse, dog, cat);
animalArray.forEach((elem) => {
    veterinar.treatAnimal(elem);
})