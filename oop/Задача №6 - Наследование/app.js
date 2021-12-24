class Transport {
    constructor(model, price, year) {
        this.model = model;
        this.price = price;
        this.year = year;
    }

    get getModel() {
        return this.model;
    }

    get getYear() {
        return new Date().getFullYear() - this.year;
    }

    motion() {
        console.log('All types of motion');
    }
}

class Airplane extends Transport{
    constructor(model, price, year) {
        super(model, price, year);
    }
    motion() {
        console.log('Fly');
    }
}


class Boeing extends Airplane {
    constructor(model, price, year) {
        super(model, price, year);
    }
}

class Airbus extends Airplane {
    constructor(model, price, year) {
        super(model, price, year);
    }
}

const boeingFromAlbania = new Boeing('A766', 300, 2007);
const airbusFromTajikiston = new Airbus('QQ166', 3000, 2005);

console.log(boeingFromAlbania.getModel)
console.log(boeingFromAlbania.getYear)
boeingFromAlbania.motion();

console.log(airbusFromTajikiston.getModel);
console.log(airbusFromTajikiston.getYear);
airbusFromTajikiston.motion();


class Truck extends Transport{
    constructor(model, price, year) {
        super(model, price, year);
    }
    motion() {
        console.log('Drive with cargo');
    }
}

class Man extends Truck {
    constructor(model, price, year) {
        super(model, price, year);
    }
}

const man = new Man('ltd777', 250, 2019);
console.log(man.getModel);
console.log(man.getYear);
man.motion()

class Car extends Transport {
    constructor(model, price, year) {
        super(model, price, year);
    }
    motion() {
        console.log('Drive')
    }
}

class Mers extends Car {
    constructor(model, price, year) {
        super(model, price, year);
    }
}

const w140 = new Mers('w140', 1200, 1988)

console.log(w140.getModel);
console.log(w140.getYear);
w140.motion()


