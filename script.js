// Creates variables for HTML elements
let lastOperation = document.getElementById("last-operation");
let currentOperation = document.getElementById("current-operation");
const CLEAR_BTN = document.querySelector(".btn-clear");
const EQUALS_BTN = document.querySelector(".btn-equals");
const DEL_BTN = document.querySelector(".btn-delete");
const NUM_ARRAY = document.querySelectorAll(".numbers");
const OPS_ARRAY = document.querySelectorAll(".operators");

// Creates global variables and sets them to initial value
let firstOperand = 0;
let secondOperand = 0;
let operator = null;
currentOperation.textContent = 0;
let screenReset = false;

// Adds event listeners for numbers and operators
NUM_ARRAY.forEach((button) => button.addEventListener("click", () => addToDisplay(button.value)));
OPS_ARRAY.forEach((button) => button.addEventListener("click", () => chooseOperator(button.value)));

// Adds event listener for "clear", "equals" and "delete" 
CLEAR_BTN.addEventListener("click", clearAll);
EQUALS_BTN.addEventListener("click", doTheMath);
DEL_BTN.addEventListener("click", deleteNum);


function doTheMath() {
    if (operator === null || screenReset) return; // Returns if no operator or if screen is reset
    secondOperand = currentOperation.textContent; // Assigns current text to second operand
    currentOperation.textContent = operate(operator, firstOperand, secondOperand); // Does the math and displays result
    lastOperation.textContent = `${firstOperand} ${operator} ${secondOperand} =`; // Displays last operation
    operator = null; // Resets operator
}

function chooseOperator(calc) {
    if (currentOperation !== null) doTheMath(); // Checks for operator
    firstOperand = currentOperation.textContent; // Assigns current text to first operand
    operator = calc; // Assigns current operator

    if (operator == "√") { // Squared root
        lastOperation.textContent = `sqrt(${firstOperand}) =`;
        currentOperation.textContent = (Math.round(sqrt(firstOperand) * 100) / 100).toFixed(2); // Rounds value to 2 decimal places
        secondOperand = currentOperation.textContent;
        screenReset = true; // Resets screen
    } else {
        lastOperation.textContent = `${firstOperand} ${operator}`; // Moves to top screen
        screenReset = true; 
    }

}

// Adds user input to screen
function addToDisplay(btnValue) {
    if (currentOperation.textContent == 0 || screenReset) {
        clearCurrentDisplay();
    }
    currentOperation.textContent = currentOperation.textContent += btnValue;
}

function clearCurrentDisplay() {
    currentOperation.textContent = "";
    screenReset = false;
}

// Resets display and variables for operations
function clearAll() {
    firstOperand = 0;
    secondOperand = 0;
    operator = null;
    result = 0;
    lastOperation.textContent = "";
    currentOperation.textContent = 0;
}

function deleteNum() {
    currentOperation.textContent = currentOperation.textContent.toString().slice(0, -1);
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+" :
            return add(a, b);
        case "-" :
            return subtract(a, b);
        case "×" :
            return multiply(a, b);
        case "%" :
            if (b == 0) {
                return "ERROR!";
            } else {
                return divide(a, b);
            }
        case "^" :
            return Math.pow(a, b);
        case "√" :
            return Math.sqrt(a);
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
function pow(a, b) {
    return Math.pow(a, b);
}
function sqrt(a) {
    return Math.sqrt(a);
}