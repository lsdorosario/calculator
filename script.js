populatesDisplay();

// Creates variables for number display, operands and result
let numberDisplay = document.querySelector("#num-display");
let operand1 = 0;
let operand2 = 0;
let result = 0;

// Creates operand nodelist and adds event listener
function populatesDisplay() {
    const NUM_ARRAY = document.querySelectorAll(".numbers");
    NUM_ARRAY.forEach(button => {
        button.addEventListener("click", () => {
            addToDisplay(button.value);
        });
    });
}

function clearDisplay() {
    numberDisplay.textContent = "";
}

function addToDisplay(btnValue) {
    numberDisplay.innerText = numberDisplay.innerText += btnValue;
}

// Uses basic arithmetic functions to calculate
function operate(operator, a, b) {
    switch (operator) {
        case "+" :
            return add(a, b);
        case "-" :
            return subtract(a, b);
        case "x" :
            return multiply(a, b);
        case "%" :
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