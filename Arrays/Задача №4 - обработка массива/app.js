let sumInputNumbers = () => {
    let userInput;
    let userValuesArray = [];

    while (userInput = prompt("Enter a value: ")) {
        if (isNaN(userInput)) {
            break;
        } else {
            userValuesArray.push(parseInt(userInput));
        }
    }

    alert("Done");


    let arraySum = userValuesArray.reduce((a, b) => a + b, 0);
    console.log(`${arraySum} - Sum of entered values`);

}

sumInputNumbers();