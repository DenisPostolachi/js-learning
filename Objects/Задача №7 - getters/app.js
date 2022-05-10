const person = {
    name: "Person",
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: "112",
        email: "email@domain.com"
    },
    address: "Moldova",
    getName() {
        console.log(this.name)
    },
    getAge() {
        console.log(this.age)
    }
}


person.getName()
person.getAge()
