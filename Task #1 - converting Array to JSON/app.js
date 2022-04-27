const names = ['james', 'jake'];
// const myJsonString = JSON.stringify(names);
// console.log(myJsonString)

JsonObject = JSON.parse(JSON.stringify(names));

// type
console.log(typeof(JsonObject));

// JsonObject
console.log(JsonObject);