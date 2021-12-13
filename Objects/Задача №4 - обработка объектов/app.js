const user1 = {
    name: 'User1',
    age: 123
}

const user2 = Object.assign({}, user1, {name: 'User2' ,age: 321});


console.log(user1);
console.log(user2);