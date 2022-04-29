const person = {
    name: "Person",
    age: 123,
    salary: 1542.33,
    contacts: {
        phone: "112",
        email: "email@domain.com"
    },
    address: "Moldova"
}

// todo incoreсt, методы должны пренаплежать объекту
const getName = () => console.log(person.name);
const getAge = () => console.log(person.age);
