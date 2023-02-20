
// Defines number display and number/operator arrays
let numberDisplay = document.querySelector("#num-display");
const CLEAR_BTN = document.querySelector(".btn-clear");
const NUM_ARRAY = document.querySelectorAll(".numbers");
const OPS_ARRAY = document.querySelectorAll(".operators");

// Creates variables for operand and result
let operand1 = 0;
let operand2 = 0;
let currentOperator = "";
let result = 0;


// Adds event listener for numbers and operators
NUM_ARRAY.forEach(button => button.addEventListener("click", () => addToDisplay(button.value)));
OPS_ARRAY.forEach(button => button.addEventListener("click", () => chooseOperator(button.value)));

// Adds user input to screen
function addToDisplay(btnValue) {
    numberDisplay.innerText = numberDisplay.innerText += btnValue;
}

function chooseOperator(operator){
    currentOperator = operator;
}

function clearDisplay() {
    numberDisplay.textContent = "";
}

// Resets display and variables for operations
function clearAll() {
    clearDisplay();
    operand1 = 0;
    operand2 = 0;
    currentOperator = "";
    result = 0;
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
                return null;
            } else {
                return divide(a, b);
            }
        default: 
        return null;
    }
}

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