// Defines number display
let numberDisplay = document.querySelector("#num-display");

// Creates variables for operand and result
let operand1 = 0;
let operand2 = 0;
let result = 0;

// Calculator 
populatesDisplay();
// opTest();

// Operation test
// function opTest() {
//     const OPS_ARRAY = document.querySelectorAll(".operators");
//     OPS_ARRAY.forEach(button => {
//         button.addEventListener("click", () => {
//             clearDisplay();

//             result = operate(button.value, operand1, 2);
//             numberDisplay.textContent = result;
//         });
//     });
// }

// Creates operand nodelist and adds event listener
function populatesDisplay() {
    const NUM_ARRAY = document.querySelectorAll(".numbers");
    NUM_ARRAY.forEach(button => {
        button.addEventListener("click", () => {
            addToDisplay(button.value);
            return parseInt(numberDisplay.innerText);
        });
    });
}

function addToDisplay(btnValue) {
    numberDisplay.innerText = numberDisplay.innerText += btnValue;
}

function clearDisplay() {
    numberDisplay.textContent = "";
}

// Uses basic arithmetic functions to calculate
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