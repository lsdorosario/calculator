// Defines number display and number/operator arrays
let numberDisplay = document.querySelector("#num-display");
const CLEAR_BTN = document.querySelector(".btn-clear");
const NUM_ARRAY = document.querySelectorAll(".numbers");
const OPS_ARRAY = document.querySelectorAll(".operators");

// Creates global variables and sets them to initial value
let firstOperand = 0;
let secondOperand = 0;
let currentOperator = "";
let operation = null;
let result = 0;
numberDisplay.textContent = 0;


// Adds event listener for numbers and operators
NUM_ARRAY.forEach(button => button.addEventListener("click", () => addToDisplay(button.value)));
OPS_ARRAY.forEach(button => button.addEventListener("click", () => chooseOperator(button.value)));

// function doTheMath() {
    
// }

// function chooseOperator(operator) {
//     currentOperator = parseInt(numberDisplay.innerText);
//     operation = currentOperator;
    
// }

// Adds user input to screen
function addToDisplay(btnValue) {
    if (numberDisplay.innerText == 0) {
        clearDisplay();
    }
    numberDisplay.innerText = numberDisplay.innerText += btnValue;
}

function clearDisplay() {
    numberDisplay.textContent = "";
}

// Resets display and variables for operations
function clearAll() {
    clearDisplay();
    firstOperand = 0;
    secondOperand = 0;
    currentOperator = "";
    operation = null;
    result = 0;
    numberDisplay.textContent = 0;
}

function deleteNum() {
    numberDisplay.innerText = numberDisplay.innerText.toString().slice(0, -1);
}

function operate(operator, a, b) {
    switch (operator) {
        case "add" :
            return add(a, b);
        case "subtract" :
            return subtract(a, b);
        case "multiply" :
            return multiply(a, b);
        case "divide" :
            if (b == 0) {
                return "ERROR";
            } else {
                return divide(a, b);
            }
        default: 
            return null;
    }
}

// Arithmetic functions
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}