// Importing my package
// Create functions,
// also ARGUMENTS are what you are sending a function and PARAMETERS are what a function expects when in is invoked (called).
// By using module.exports, you're able to encapsulate and organize your code while making specific functions available
//  for use in other parts of your application.
// common syntax in Node.js that allows you to import (require) the functionality from another module,
const readline = require("readline-sync");

let continueCalculating = true 

function askRepeat(){
    const vote = readline.keyIn("Continue calculating? Press 'Y' or 'N'").toLowerCase();

    switch (vote) {
        case "y":
            
            break;
            case "n":
            continueCalculating = false
            break;
        default:
            break;
    }

}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
}

function getNumberInput(prompt) {
    return parseFloat(readline.question(prompt));
}

function getOperationInput() {
    return readline.question("Please enter the operation to perform (add, sub, mul, div): ");
}

function calculate() {
    const num1 = getNumberInput("Please enter your first number: ");
    const num2 = getNumberInput("Please enter your second number: ");
    const operation = getOperationInput();

    let result;
    switch (operation) {
        case "add":
            result = add(num1, num2);
            break;
        case "sub":
            result = subtract(num1, num2);
            break;
        case "mul":
            result = multiply(num1, num2);
            break;
        case "div":
            result = divide(num1, num2);
            break;
        default:
            console.log("Invalid operation");
            return;
    }
    console.log(`The result is: ${result}`);
    askRepeat()
}
while (continueCalculating === true) {
    calculate();
}





